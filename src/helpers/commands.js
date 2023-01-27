const list = [
    {title: 'OS', command:'CIM_OperatingSystem | ConvertTo-csv | convertfrom-csv | ConvertTo-json'},
    {title: 'Motherboard',command:'Get-CimInstance CIM_Card | ConvertTo-csv | convertfrom-csv | ConvertTo-json'},
    {title: 'CPU',command:'Get-CimInstance CIM_Processor | ConvertTo-csv | convertfrom-csv | ConvertTo-json'},
    {title: 'RAM',command:'Get-CimInstance CIM_PhysicalMemory | ConvertTo-csv | convertfrom-csv | ConvertTo-json'},
    {title: 'Disk/s',command:'Get-CimInstance CIM_DiskDrive | ConvertTo-csv | convertfrom-csv | ConvertTo-Json'},
    {title: 'Sound',command:'Get-CimInstance Win32_SoundDevice | ConvertTo-csv | convertfrom-csv | ConvertTo-json'},
    {title: 'Programs',command:'Get-CimInstance CIM_Product | ConvertTo-csv | convertfrom-csv | ConvertTo-json'},
    {title: 'GPU',command:'Get-CimInstance CIM_VideoController | ConvertTo-csv | convertfrom-csv | ConvertTo-json'},
    {title: 'OS',command:'Get-CimInstance CIM_NetworkAdapter | ConvertTo-csv | convertfrom-csv | ConvertTo-json'},
]

module.exports.list = {
    list: list,
}