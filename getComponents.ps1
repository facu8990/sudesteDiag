Write-Output "{}" >> .\inventory\os.json
Get-CimInstance CIM_OperatingSystem | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\os.json
Write-Output "{}" >> .\inventory\motherboard.json
Get-CimInstance CIM_Card | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\motherboard.json
Write-Output "{}" >> .\inventory\cpu.json
Get-CimInstance CIM_Processor | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\cpu.json
Write-Output "{}" >> .\inventory\memory.json
Get-CimInstance CIM_PhysicalMemory | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\memory.json
Write-Output "{}" >> .\inventory\disks.json
Get-CimInstance CIM_DiskDrive | ConvertTo-csv | convertfrom-csv | ConvertTo-Json | Set-Content .\inventory\disks.json
Write-Output "{}" >> .\inventory\sound.json
Get-CimInstance Win32_SoundDevice | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\sound.json
Write-Output "{}" >> .\inventory\programs.json
Get-CimInstance CIM_Product | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\programs.json
Write-Output "{}" >> .\inventory\gpu.json
Get-CimInstance CIM_VideoController | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\gpu.json
Write-Output "{}" >> .\inventory\nic.json
Get-CimInstance CIM_NetworkAdapter | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\nic.json
