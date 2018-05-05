#!/bin/sh

while read line; do export "$line"
done <./.env

exec node_modules/.bin/sls deploy
