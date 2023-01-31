const list = [
    { title: 'OS', command: 'CIM_OperatingSystem', filter: ['Caption', 'InstallDate', 'CSName', 'Version', 'BuildNumber', 'OSArchitecture', 'SerialNumber'] },
    { title: 'Motherboard', command: 'CIM_Card', filter: ['Manufacturer', 'SerialNumber', 'Version', 'Product'] },
    { title: 'CPU', command: 'CIM_Processor', filter: ['DeviceID', 'Description', 'Name', 'MaxClockSpeed', 'Manufacturer', 'NumberOfCores', 'ProcessorId', 'SocketDesignation', 'ThreadCount'] },
    { title: 'RAM', command: 'CIM_PhysicalMemory', filter: ['DeviceLocator', 'PartNumber', 'SerialNumber', 'Capacity', 'ConfiguredClockSpeed', 'ConfiguredVoltage', 'Manufacturer'] },
    { title: 'GPU', command: 'CIM_VideoController', filter: ['DeviceID', 'Name', 'AdapterCompatibility', 'VideoProcessor', 'AdapterRAM', 'DriverVersion', 'AdapterRAM'] },
    { title: 'Disk/s', command: 'CIM_DiskDrive', filter: ['DeviceID', 'Caption','MediaType','Partitions','SerialNumber','Size' , 'FirmwareRevision' ] },
    { title: 'Sound', command: 'Win32_SoundDevice', filter: ['DeviceID', 'Caption' ,'Manufacturer'] },
    { title: 'Network', command: 'CIM_NetworkAdapter', filter: ['DeviceID', 'Description', 'Manufacturer', 'ServiceName', 'Speed'] },
    { title: 'Programs', command: 'CIM_Product', filter: ['Caption', 'Vendor', 'Version'] },
];

module.exports.list = list;