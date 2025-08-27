#!/bin/bash

# Define variables
host="localhost"
port="27017"
username=""
password=""
authenticationDatabase=""
dbName="test-restore-db"
systemUsername=$(whoami)
pathToDump="/Users/${systemUsername}/Downloads"
dateToAppend=$(date +"%Y%m%d")

# Check if db existing , if exists drop it 
existingDb=$(mongo --quiet --eval "db.getMongo().getDBNames()" | tr -d '\[\]\n" ')

if echo "$existingDb" | grep -wq "$dbName"; then
  mongo --eval "db.getSiblingDB('$dbName').dropDatabase()" && sleep 2
  echo "Database '$dbName' dropped."
else
  echo "Database '$dbName' does not exist."

fi
sleep 2

# check if tar.gz or uncompressed available


# Prepere dump file name to find
echo "Preparing partial file name to find..."
echo "Date to append to file name: ${dateToAppend}"
partial_path="${pathToDump}/b2c-experience-bfg-prod-${dateToAppend}*"
echo "Partial file name : ${partial_path}"

# use find command to find the complete path of file with file name
full_path_system=$(find $pathToDump -type d -name "*$(echo $partial_path | awk -F/ '{print $NF}')*" 2>/dev/null | grep "$partial_path")
echo "Full path found : ${full_path_system}"
filename=$(basename $full_path_system)
fullPath=${pathToDump}/${filename}
echo "Full path to restore from : ${fullPath}"

# Check if the full path was found
if [[ -z $fullPath ]]; then
    echo "Partial path does not exist"
else
    echo "Restoring from path: $fullPath"

# Restore database from directory
  mongorestore --host="${host}" --port="${port}" --dir="${fullPath}" --db="${dbName}"
  echo "Database '${dbName}' restored from '${fullPath}'."
 sleep 2
fi