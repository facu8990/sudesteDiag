@echo off

echo "Recompiling components information..."

mkdir .\inventory

powershell -ExecutionPolicy Unrestricted .\getComponents.ps1

echo "Starting Viewer..."

cd .\node
call .\nodevars.bat
cd ..
call .\node\npm i
call .\node\npm run live