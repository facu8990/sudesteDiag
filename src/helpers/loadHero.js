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

module.exports.loadHero = loadHero;