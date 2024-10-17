#!/bin/bash
echo "Starting the commit"
read name
echo $name "i am starting the commit"
git add .
git commit -m "New Commit on Controlled Components"
git push origin main
