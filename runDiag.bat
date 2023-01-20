@echo off

echo "Recompiling components information..."

mkdir .\inventory

powershell .\getComponents.ps1

echo "Starting Viewer..."

call .\node\npm i
call .\node\npm run live
