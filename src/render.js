const { list } = require('./helpers/commands');
const { loadHero } = require('./helpers/loadHero');
const { renderComponent } = require('./helpers/renderComponent');
 
const body = document.body;
const main = document.createElement('main');
const footer = document.createElement('footer');
main.className = 'container';
footer.className = 'container';
footer.innerHTML = `<small>SudesteDiag es un desarrollo de Facundo Redon</small>`;

const startInventory = (data) => {
    document.getElementById('start').onclick = null;
    data.forEach(item => {
        renderComponent(item,main)
    });

};

body.appendChild(loadHero(list));
body.appendChild(main);
body.appendChild(footer);

