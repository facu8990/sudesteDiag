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
    article.appendChild(details);
    return article;
};

const appendMultiple = (component) => {
    const content = {title: component[0], details: component[1]};
    const article = document.createElement('article');
    const header = document.createElement('header');
    const hgroup = document.createElement('hgroup');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    article.appendChild(header);
    header.appendChild(hgroup);
    hgroup.appendChild(h1);
    hgroup.appendChild(p);
    h1.append(`${content.title}`);
    p.append(`Devices found: ${content.details.length}`);
    const figure = document.createElement('figure');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const trh = document.createElement('tr');
    figure.appendChild(table)
    table.appendChild(thead)
    thead.appendChild(trh);
    Object.keys(content.details[0]).forEach(element => {
        const th = document.createElement('th');
        th.scope += 'col';
        th.append(element)
        trh.appendChild(th);
    });
    const tbody = document.createElement('tbody');
    table.appendChild(tbody)
    content.details.forEach(element => {
        const trb = document.createElement('tr');   
        Object.values(element).forEach(element => {
            const td = document.createElement('td');
            td.append(element);
            trb.appendChild(td);
        });
        tbody.appendChild(trb);
    })
    article.appendChild(figure);    
    return article;
};

const appendSection = (section, input) => {
    Object.entries(input)
    .forEach(component => {
        if (component[1].length === undefined) {
            section.appendChild(singleComponent(component));
        } else {
            section.appendChild(appendMultiple(component));
        };
    });
};

appendSection(main,inventory)


document.body.appendChild(main)