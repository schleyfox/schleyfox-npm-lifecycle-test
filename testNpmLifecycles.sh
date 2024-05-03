#!/bin/bash
set -euo pipefail

cd package
echo "[package] npm install"
npm install
cat scripts.log
rm scripts.log
echo

cd ..
cd apps

cd npm
echo "[from npm] npm install"
npm install
cat node_modules/schleyfox-npm-lifecycle-test/scripts.log
echo

cd ../git
echo "[from git] npm install"
npm install
cat node_modules/schleyfox-npm-lifecycle-test/scripts.log
echo

cd ../file
echo "[from file] npm install"
npm install
cat node_modules/schleyfox-npm-lifecycle-test/scripts.log
echo