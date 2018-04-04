#!/bin/bash
PID=`cat .mongod.pid`
echo $PID
kill $PID
echo > .mongod.pid
