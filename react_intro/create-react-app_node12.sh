#!/bin/sh
# -----------------------------------------------------------------------------
# Script to create a React app using an older version of create-react-app
# -----------------------------------------------------------------------------
# This script sets up a temporary environment to install and run
# create-react-app version 4.0.3, which is compatible with Node.js 12.
# It allows the creation of a React app using this older version,
# bypassing the requirement for a newer Node.js version.
#
# Usage:
#   ./create-old-react-app.sh <project-name>
#
# <project-name>: The name of the directory where the React app will be created.
#
# Example:
#   ./create-old-react-app.sh my-react-app
#
# This will create a React app in the 'my-react-app' directory.
# -----------------------------------------------------------------------------

# Check if an argument (project name) is passed
if [ -z "$1" ]; then
  echo "Error: No project name provided."
  echo "Usage: $0 <project-name>"
  exit 1
fi

rm -rf tmp-react
mkdir tmp-react
cd tmp-react

echo "=== Installing create-react-app@4.0.3 ==="
npm install create-react-app@4.0.3

echo "=== Modifying install script to allow installing old version  ==="
sed -i 's/latest && semver.lt/false \&\& semver.lt/g' node_modules/create-react-app/createReactApp.js

echo "=== Creating the app  ==="
npx create-react-app $1 --scripts-version 4.0.3

echo "=== Cleaning up  ==="
mv $1 ../
cd ..
rm -rf tmp-react
