#!/bin/bash
echo "Starting the commit"
read name
echo $name "i am starting the commit"
git add .
git commit -m "added node-js routing using .get"
git push origin main
