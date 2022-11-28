#! /bin/bash
full_path=$(realpath $0)
dir_path=$(dirname $full_path)

source $dir_path/../.env
pvault="docker run --rm -i piiano/pvault-cli:0.9.8"

function debug()
{
	echo -e '\n--' $1
	if $INTERACTIVE_MODE ; then
		echo "<enter> to continue"
		read press_enter
	fi
}

debug "Initiating & populating PSQL + Vault"
$dir_path/init-psql.sh
$dir_path/init-vault.sh

echo -e "\n\n***** Lets look on the data"
debug "1. DB data"
docker exec -i demo-db psql -U postgres -c "SELECT * from users"
docker exec -i demo-db psql -U postgres -c "SELECT * from badges"
debug "2. Vault data by using the APIs"
${pvault} object list --collection users --all-unsafe
debug "3. Vault data as stored in the Vault's DB"
docker exec -i pvault-dev psql -U pvault -c "SELECT email,ssn FROM data_app_users"
