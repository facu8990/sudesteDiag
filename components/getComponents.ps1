wmic baseboard list brief   /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\motherboard.json;
wmic cpu list brief  /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\cpu.json;
wmic memorychip list /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\memory.json;
wmic diskdrive list brief /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\disks.json;
wmic sounddev list brief /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\sound.json;
wmic product list brief /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\programs.json;
wmic path win32_VideoController get /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\gpu.json;
wmic nic list brief /format:csv | convertfrom-csv | ConvertTo-Json | Set-Content .\nic.json;