#! /bin/bash

docker rm -f demo-db
docker run --rm -p 5432:5432 \
  --name demo-db \
  -e POSTGRES_PASSWORD=password \
  -d \
  postgres:13.5

until docker exec -it demo-db psql -U postgres -c "\l" > /dev/null 2>&1
do echo "Waiting for the DB to start ..." && sleep 1; done

full_path=$(realpath $0)
dir_path=$(dirname $full_path)

cat $dir_path/populate.sql | docker exec -i demo-db psql -U postgres
