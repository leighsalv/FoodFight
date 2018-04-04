#!/bin/bash
mongod --dbpath ./data/db --port 27017 &
PID=$!
echo $PID > ./.mongod.pid
