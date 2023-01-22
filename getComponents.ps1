New-Item .\inventory\os.json
Get-CimInstance CIM_OperatingSystem | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\os.json
New-Item .\inventory\motherboard.json
Get-CimInstance CIM_Card | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\motherboard.json
New-Item .\inventory\cpu.json
Get-CimInstance CIM_Processor | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\cpu.json
New-Item .\inventory\memory.json
Get-CimInstance CIM_PhysicalMemory | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\memory.json
New-Item .\inventory\disks.json
Get-CimInstance CIM_DiskDrive | ConvertTo-csv | convertfrom-csv | ConvertTo-Json | Set-Content .\inventory\disks.json
New-Item .\inventory\sound.json
Get-CimInstance Win32_SoundDevice | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\sound.json
New-Item .\inventory\programs.json
Get-CimInstance CIM_Product | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\programs.json
New-Item .\inventory\gpu.json
Get-CimInstance CIM_VideoController | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\gpu.json
New-Item .\inventory\nic.json
Get-CimInstance CIM_NetworkAdapter | ConvertTo-csv | convertfrom-csv | ConvertTo-json | Set-Content .\inventory\nic.json
