const { exec } = require('child_process');
const { list } = require('./helpers/commands');
const { loadingDialog } = require('./helpers/loadingDialog');
const { loadArticle } = require('./helpers/loadArticle');
const { loadHero } = require('./helpers/loadHero');
 
const body = document.body;
const main = document.createElement('main');
const footer = document.createElement('footer');
main.className = 'container';
footer.className = 'container';
footer.innerHTML = `<small>SudesteDiag es un desarrollo de Facundo Redon</small>`;

const closingDialog = (element) => {
    element.remove();
}

const startInventory = (data) => {
    document.getElementById('start').onclick = null;
    document.getElementById('start').textContent = 'Save';
    data.forEach(item => {
        main.append(loadArticle(item));
    })
};

body.appendChild(loadHero(list));
body.appendChild(main);
body.appendChild(footer);
