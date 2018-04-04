#!/bin/bash

int_handler()
{
    echo "Interrupted... Stopping mongod"
    ./stop_mongod.sh
    exit 1
}
trap 'int_handler' INT

# start mongo
./start_mongod.sh
sleep 5
node run_dpd.js

exit 0

