#!/bin/bash

CMD="docker compose \
  -p nest-mysql \
  -f compose/api.compose.yml \
  -f compose/mysql.compose.yml"

function build()
{
  echo "##### Docker Compose Build #####"
  eval "$CMD" --profile "$1" --env-file "$2" build
}

function run()
{
  echo "##### Docker Compose Run #####"
  eval "$CMD" --profile "$1" --env-file "$2" up --remove-orphans
}

function menu()
{
  PS3="빌드와 실행 방식을 선택하세요 > "
  COLUMNS=30
  options=("Build and Run" "Run" "Quit")
  select yn in "${options[@]}"; do
      case $yn in
          "Build and Run" ) build "$1" "$2"; run "$1" "$2"; break;;
          "Run" )           run   "$1" "$2"; break;;
          "Quit" )          exit;;
      esac
  done
}

echo
PS3="실행할 서비스를 선택하세요 > "
COLUMNS=30
options=(
  "MySQL"
  "API"
  "All"
  "Quit"
)
select yn in "${options[@]}"; do
    case $yn in
        "MySQL" )       menu  "mysql"         ".env";   break;;
        "API" )         menu  "api"           ".env";   break;;
        "All")          menu  "all"           ".env";   break;;
        "Quit" )                                        exit;;
    esac
done