New-Item 'inventory' -ItemType Directory
wmic baseboard list brief   /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\inventory\motherboard.json;
wmic cpu list brief  /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\inventory\cpu.json;
wmic memorychip list /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\inventory\memory.json;
wmic diskdrive list brief /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\inventory\disks.json;
wmic sounddev list brief /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\inventory\sound.json;
wmic product list brief /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\inventory\programs.json;
wmic path win32_VideoController get /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\inventory\gpu.json;
wmic nic list brief /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\inventory\nic.json;