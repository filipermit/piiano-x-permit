#! /bin/bash


full_path=$(realpath $0)
dir_path=$(dirname $full_path)
source $dir_path/../.env
pvault="docker run --rm -i piiano/pvault-cli:0.9.8"

# Start vault
docker rm -f pvault-dev
docker run --rm \
  --name pvault-dev \
  -p 8123:8123 \
  -e PVAULT_DEVMODE=true \
  -e PVAULT_SERVICE_LICENSE=$PVAULT_SERVICE_LICENSE \
  -e PVAULT_FEATURES_CUSTOM_TYPES_ENABLE=true \
  -d \
  -v $dir_path/pvault.types.toml:/etc/pvault/pvault.types.toml \
  --mount type=tmpfs,destination=/var/lib/postgresql/data \
  piiano/pvault-dev:0.9.8

until ${pvault} version > /dev/null 2>&1
do echo "Waiting for the vault to start ..." && sleep 1; done

${pvault} collection add --collection-pvschema " \
users PERSONS ( \
  email EMAIL UNIQUE NOT NULL \
);"
${pvault} collection property add --collection users --name ssn --pii-type-name SSN_protected --is-unique=true --is-index=true


${pvault} object add --fields '{ "ssn":"123-12-1111", "email":"ariel@piiano.com"}' --collection users
${pvault} object add --fields '{ "ssn":"123-12-2222", "email":"filip@permit.io"}' --collection users
