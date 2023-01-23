import inventory from './combine'

const main = document.createElement('main');
main.className += "container"

document.getElementById('pcName').append(inventory.OS.CSName)
const os = document.createElement('hgroup')
os.innerHTML = `
    <h1>${inventory.OS.Caption}</h1>
    <small>${inventory.OS.Version}</small>
    <small>${inventory.OS.OSArchitecture}</small>
    <small>${inventory.OS.BuildNumber}</small>
    <small>${inventory.OS.SerialNumber}</small>
`
document.getElementById('os').appendChild(os)
document.getElementById('os').appendChild(document.createElement('br'))

const cpu = document.createElement('article')
cpu.innerHTML = `
    <header>
        <hgroup>
            <h2>CPU</h2>
            <p>${inventory.CPU.Name}</p>
        </hgroup>
    </header>
    <ul>
        <li>Family: ${inventory.CPU.Caption}</li>
        <li>Brand: ${inventory.CPU.Manufacturer}</li>
        <li>Speed: ${(inventory.CPU.MaxClockSpeed/1000).toFixed(2)} Ghz.</li>
        <li>Cores: ${inventory.CPU.NumberOfCores}</li>
        <li>Threads: ${inventory.CPU.ThreadCount}</li>
        <li>Socket: ${inventory.CPU.SocketDesignation}</li>
    </ul>
`;
main.appendChild(cpu);

const singleComponent = (component) => {
    const content = {title: component[0], details: component[1]};
    const article = document.createElement('article');
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    article.appendChild(header);
    header.appendChild(h1);
    h1.append(`${content.title}`);
    const details = document.createElement('ul');
    Object.entries(content.details)
    .forEach(component => {
        if (component[1] !== null) {
            if (component[1].length>0){
                const li = document.createElement('li');
                li.append(`${component[0]}: ${component[1]}`);
                details.appendChild(li);
    }}});
    article.appendChild(details)
    return article;
};

const appendMultiple = (component) => {
    console.log({ title: component[0], details: component[1]});

};

const appendSection = (section, input) => {
    Object.entries(input)
    .forEach(component => {
        if (component[1].length === undefined) {
            section.appendChild(singleComponent(component));
        } else {
            appendMultiple(section);
        };
    });
};

appendSection(main,inventory)

const disks = document.createElement('article')
disks.innerHTML = `
    <header>
        <hgroup>
            <h2>Disks</h2>
            <p>Devices found: ${inventory.disks.length}</p>
        </hgroup>
    </header>
`;
const diskList = document.createElement('div');
diskList.className += "grid";
inventory.disks.forEach(function (disk) {
    const diskItem = document.createElement('div');
    diskItem.innerHTML = `
    <header>
        <hgroup>
            <h4>${disk.Caption}</h4>
            <p>${disk.DeviceID}</p>
        </hgroup>
    </header>
    <ul>
        <li>Size: ${(disk.Size/1073741824).toFixed(2)} GB</li>
        <li>Partitions: ${disk.Partitions}</li>
        <li>Firmware: ${disk.FirmwareRevision}</li>
        <li>Serial: ${disk.SerialNumber.trim()}</li>
    </ul>
    `
    diskList.appendChild(diskItem);
})
disks.appendChild(diskList)
main.appendChild(disks);

const gpus = document.createElement('article')
gpus.innerHTML = `
    <header>
        <hgroup>
            <h2>GPUs</h2>
            <p>Devices found: ${inventory.gpu.length}</p>
        </hgroup>
    </header>
`;
const gpuList = document.createElement('div');
gpuList.className += "grid";
inventory.gpu.forEach(function (gpu) {
    const gpuItem = document.createElement('div');
    gpuItem.innerHTML = `
    <header>
        <hgroup>
            <h4>${gpu.Caption}</h4>
            <p>${gpu.AdapterCompatibility}</p>
        </hgroup>
    </header>
    <ul>
        <li>vRAM: ${(gpu.AdapterRAM/1073741824).toFixed(2)} GB</li>
        <li>Driver: ${gpu.DriverVersion}</li>
    </ul>
    `
    gpuList.appendChild(gpuItem);
})
gpus.appendChild(gpuList)
main.appendChild(gpus);

const rams = document.createElement('article')
rams.innerHTML = `
    <header>
        <hgroup>
            <h2>RAM</h2>
            <p>Devices found: ${inventory.memory.length}</p>
        </hgroup>
    </header>
`;
const ramList = document.createElement('div');
ramList.className += "grid";
inventory.memory.forEach(function (ram) {
    const ramItem = document.createElement('div');
    ramItem.innerHTML = `
    <header>
        <hgroup>
            <h4>${ram.DeviceLocator}</h4>
            <p>${ram.PartNumber}</p>
        </hgroup>
    </header>
    <ul>
        <li>Size: ${((ram.Capacity/1073741824).toFixed(2))} GB</li>
        <li>Speed: ${ram.Speed} Mhz.</li>
        <li>Voltage: ${ram.ConfiguredVoltage/1000}v</li>
    </ul>
    `
    ramList.appendChild(ramItem);
})
rams.appendChild(ramList)
main.appendChild(rams);

const motherboard = document.createElement('article')
motherboard.innerHTML = `
    <header>
        <hgroup>
            <h2>Motherboard</h2>
            <p>${inventory.motherboard.Product}</p>
        </hgroup>
    </header>
    <ul>
        <li>Brand: ${inventory.motherboard.Manufacturer}</li>
        <li>Serial: ${inventory.motherboard.SerialNumber}</li>
        <li>Version: ${inventory.motherboard.Version}</li>
    </ul>
`;
main.appendChild(motherboard);

const nics = document.createElement('article')
nics.innerHTML = `
    <header>
        <hgroup>
            <h2>Network</h2>
            <p>Devices found: ${inventory.nic.length}</p>
        </hgroup>
    </header>
`;
const nicTable = document.createElement('table');
nicTable.innerHTML = `
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Service</th>
        </tr>
    </thead>
`;
nics.appendChild(nicTable)
const nicList = document.createElement('tbody');
inventory.nic.forEach(function (nic) {
    const nicItem = document.createElement('tr');
    nicItem.innerHTML = `
        <td scope="col">${nic.DeviceID}</td>
        <td scope="col">${nic.Name}</td>
        <td scope="col">${nic.ServiceName}</td>
    `
    nicList.appendChild(nicItem);
})
nicTable.appendChild(nicList)
main.appendChild(nics);

const programs = document.createElement('article')
programs.innerHTML = `
    <header>
        <hgroup>
            <h2>Programs</h2>
            <p>Installed: ${inventory.programs.length}</p>
        </hgroup>
    </header>
`;
const programsTable = document.createElement('table');
programsTable.innerHTML = `
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Vendor</th>
            <th scope="col">Version</th>
        </tr>
    </thead>
`;
programs.appendChild(programsTable)
const programsList = document.createElement('tbody');
inventory.programs.forEach(function (programs) {
    const programsItem = document.createElement('tr');
    programsItem.innerHTML = `
        <td scope="col">${programs.Caption}</td>
        <td scope="col">${programs.Vendor}</td>
        <td scope="col">${programs.Version}</td>
    `
    programsList.appendChild(programsItem);
})
programsTable.appendChild(programsList)
main.appendChild(programs);


document.body.appendChild(main)