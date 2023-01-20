import cpuData from './cpu.json'
import diskData from './disks.json'
import gpuData from './gpu.json'
import ramData from './memory.json'
import motherboardData from './motherboard.json'
import soundData from './sound.json'
import netData from './nic.json'
import programsData from './programs.json'

document.querySelector('#cpu').innerHTML = `
    <h2>CPU</h2>
    <article>
        <header>${cpuData.Name}</header>
        <table role="grid">
            <tbody>
                <tr>
                    <td>Family</td>
                    <td>${cpuData.Caption}</td>
                </tr>
                <tr>
                    <td>Brand</td>
                    <td>${cpuData.Manufacturer}</td>
                </tr>
                <tr>
                    <td>Speed</td>
                    <td>${cpuData.MaxClockSpeed} Mhz.</td>
                </tr>
                <tr>
                    <td>Socket</td>
                    <td>${cpuData.SocketDesignation}</td>
                </tr>
            </tbody>
        </table>
    </article>
`;

diskData.forEach(function (disk) {
    const article = document.createElement('article')
    article.innerHTML = `
            <header>${disk.Caption}</header>
            <figure>
            <table role="grid">
                <tbody>
                    <tr>
                        <td>Partitions</td>
                        <td>${disk.Partitions}</td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td>${(disk.Size/1073741824).toFixed(2)} GB</td>
                    </tr>
                </tbody>
            </table>
            </figure>
    `;
    document.querySelector('#disks').appendChild(article)
  });

gpuData.forEach(function (gpu) {
    const article = document.createElement('article')
    article.innerHTML = `
            <header>${gpu.DeviceID}</header>
            <table role="grid">
                <tbody>
                    <tr>
                        <td>Family</td>
                        <td>${gpu.Caption}</td>
                    </tr>
                    <tr>
                        <td>Brand</td>
                        <td>${gpu.AdapterCompatibility}</td>
                    </tr>
                    <tr>
                        <td>vRAM</td>
                        <td>${(gpu.AdapterRAM/1073741824).toFixed(2)} GB</td>
                    </tr>
                </tbody>
            </table>
    `;
    document.querySelector('#gpu').appendChild(article)
  });

  ramData.forEach(function (ram) {
    const article = document.createElement('article')
    article.innerHTML = `
            <header>${ram.DeviceLocator}</header>
            <table role="grid">
                <tbody>
                    <tr>
                        <td>Brand</td>
                        <td>${ram.Manufacturer}</td>
                    </tr>
                    <tr>
                        <td>Part Number</td>
                        <td>${ram.PartNumber}</td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td>${(ram.Capacity/1073741824).toFixed(2)} GB</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>${ram.Speed} Mhz.</td>
                    </tr>
                </tbody>
            </table>
    `;
    document.querySelector('#ram').appendChild(article)
  });


  document.querySelector('#motherboard').innerHTML = `
  <h2>Motherboard</h2>
  <article>
      <header>${motherboardData.Product}</header>
      <table role="grid">
          <tbody>
              <tr>
                  <td>Brand</td>
                  <td>${motherboardData.Manufacturer}</td>
              </tr>
              <tr>
                  <td>Serial</td>
                  <td>${motherboardData.SerialNumber}</td>
              </tr>
          </tbody>
      </table>
  </article>
`;

soundData.forEach(function (sound) {
    const article = document.createElement('article')
    article.innerHTML = `
            <header>Device ${sound.Name}</header>
            <table role="grid">
                <tbody>
                    <tr>
                        <td>Brand</td>
                        <td>${sound.Manufacturer}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>${sound.Status}</td>
                    </tr>
                </tbody>
            </table>
    `;
    document.querySelector('#sound').appendChild(article)
  });

  netData.forEach(function (network) {
    const article = document.createElement('article')
    article.innerHTML = `
            <header>Device ${network.DeviceID}</header>
            <table role="grid">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>${network.Name}</td>
                    </tr>
                    <tr>
                        <td>Service</td>
                        <td>${network.ServiceName}</td>
                    </tr>
                </tbody>
            </table>
    `;
    document.querySelector('#network').appendChild(article)
  });

  programsData.forEach(function (programs) {
    console.log(programs);
    const tbody = document.createElement('tbody')
    tbody.innerHTML = `

                    <tr>
                        <td>${programs.Name}</td>
                        <td>${programs.Version}</td>
                    </tr>
    `;
    document.querySelector('#programs').appendChild(tbody)
  });
