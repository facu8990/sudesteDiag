@echo off

echo "Recompiling components information..."

mkdir .\inventory

powershell -ExecutionPolicy Unrestricted .\getComponents.ps1

echo "Starting Viewer..."

call .\node\nodevars.bat
call .\node\npm i
call .\node\npm run live