const list = [
    { title: 'OS', command: 'CIM_OperatingSystem', filter: ['Caption', 'InstallDate', 'CSName', 'Version', 'BuildNumber', 'OSArchitecture', 'SerialNumber'] },
    { title: 'Motherboard', command: 'CIM_Card', filter: ['Manufacturer', 'SerialNumber', 'Version', 'Product'] },
    { title: 'CPU', command: 'CIM_Processor', filter: ['DeviceID', 'Description', 'Name', 'MaxClockSpeed', 'Manufacturer', 'NumberOfCores', 'ProcessorId', 'SocketDesignation', 'ThreadCount'] },
    { title: 'RAM', command: 'CIM_PhysicalMemory', filter: ['DeviceLocator', 'PartNumber', 'SerialNumber', 'Capacity', 'ConfiguredClockSpeed', 'ConfiguredVoltage', 'Manufacturer'] },
    { title: 'GPU', command: 'CIM_VideoController', filter: ['DeviceID', 'Name', 'AdapterCompatibility', 'VideoProcessor', 'AdapterRAM', 'DriverVersion', 'AdapterRAM'] },
    { title: 'Disk/s', command: 'CIM_DiskDrive', filter: [''] },
    { title: 'Sound', command: 'Win32_SoundDevice', filter: [''] },
    { title: 'Network', command: 'CIM_NetworkAdapter', filter: [''] },
    { title: 'Programs', command: 'CIM_Product', filter: [''] },
];

module.exports.list = list;