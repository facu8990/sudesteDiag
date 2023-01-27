const { exec } = require('child_process');

const list = [
    { title: 'OS', command: 'CIM_OperatingSystem' },
    { title: 'Motherboard', command: 'CIM_Card' },
    { title: 'CPU', command: 'CIM_Processor' },
    { title: 'RAM', command: 'CIM_PhysicalMemory' },
    { title: 'GPU', command: 'CIM_VideoController' },
    { title: 'Disk/s', command: 'CIM_DiskDrive' },
    { title: 'Sound', command: 'Win32_SoundDevice' },
    { title: 'Network', command: 'CIM_NetworkAdapter' },
    { title: 'Programs', command: 'CIM_Product' },
]

const body = document.body;
const main = document.createElement('main');
const footer = document.createElement('footer');
main.className = 'container'
footer.className = 'container'
footer.innerHTML = `<small>footer</small>`;

const closingDialog = (element) => {
    element.remove();
}

const loadingDialog = (title) => {
    const dialog = document.createElement('dialog');
    dialog.id = 'dialog';
    dialog.open = 'true';
    const article = document.createElement('article');
    const close = document.createElement('a');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    article.id = title
    h2.append(title);
    p.ariaBusy = true;
    close.href = '#close';
    close.ariaLabel = 'Close';
    close.className = 'close';
    close.onclick = () => closingDialog(dialog);
    article.append(close)
    article.appendChild(h2);
    article.appendChild(p);
    dialog.appendChild(article);
    return dialog;
}

const loadArticle = (item) => {
    const article = document.createElement('article');
    const header = document.createElement('header');
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');
    const p = document.createElement('p');
    article.id = item.title
    p.ariaBusy = true;
    h2.append(item.title);
    header.appendChild(h2);
    article.appendChild(header);
    article.appendChild(p);
    document.getElementById('start').ariaBusy = 'true';
    document.getElementById('start').textContent = 'Loading';
    exec(`powershell Get-CimInstance "${item.command} | ConvertTo-csv | convertfrom-csv | ConvertTo-json"`, (err, stdout, stderr) => {
        if (err) {
            p.ariaBusy = 'false'
            p.append(stderr)
            return;
        };
        p.remove();
        const output = JSON.parse(stdout);
        if (output.length === undefined) {
            Object.keys(output).forEach(prop => {
                if (output[prop] === "" || output[prop] === null) {
                    delete output[prop];
                }
            });
            Object.entries(output).forEach(component => {
                if (component[1] !== null) {
                    if (component[1].length > 0) {
                        const li = document.createElement('li');
                        li.append(`${component[0]}: ${component[1]}`);
                        ul.appendChild(li);
                    }
                }
            });
            article.appendChild(ul);
        } else {

            const list = [];
            output.forEach(item => {
                Object.keys(item).forEach(prop => {
                    if (item[prop] === "" || item[prop] === null) {
                        delete item[prop];
                    }
                });
                list.push(item);
            });

        };
        document.getElementById('start').ariaBusy = 'false';
        document.getElementById('start').textContent = 'Loading';
    });

    return article;
}

const startInventory = (data) => {
    document.getElementById('start').onclick = null;
    document.getElementById('start').textContent = 'Save';
    data.forEach(item => {
        main.append(loadArticle(item));
    })
};

const loadHero = (data) => {
    const hero = document.createElement('div');
    const nav = document.createElement('nav');
    const brand = document.createElement('ul');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const links = document.createElement('ul');
    hero.className = 'hero';
    nav.className = 'container-fluid';
    brand.innerHTML = `<li><a href="https://github.com/facu8990" class="contrast" onclick="event.preventDefault()"><strong>Sudestec</strong></a></li>`;
    details.role = 'list';
    details.dir = 'rtl';
    summary.ariaHasPopup = 'listbox';
    summary.role = 'link';
    summary.className = 'contrast';
    summary.append('Components');
    links.role = 'listbox'
    data.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${item.title}`
        a.append(item.title);
        li.appendChild(a);
        links.appendChild(li);
    })
    ul.appendChild(li);
    li.appendChild(details);
    details.appendChild(summary);
    details.appendChild(links);
    nav.appendChild(brand);
    nav.appendChild(ul);
    const header = document.createElement('header');
    header.className = 'container'
    header.innerHTML = `
                        <hgroup>
                            <h1>SudesteDiag</h1>
                            <h2>A simple and concise System Inventory report generator</h2>
                        </hgroup>
                    `;
    const p = document.createElement('p');
    const startButton = document.createElement('a');
    startButton.id = 'start'
    startButton.role = 'button';
    startButton.href = '#'
    startButton.onclick = () => startInventory(list);
    startButton.append('Start');
    p.appendChild(startButton);
    header.appendChild(p);
    hero.appendChild(nav);
    hero.appendChild(header);

    return hero;
};

body.appendChild(loadHero(list));
body.appendChild(main);
body.appendChild(footer);
