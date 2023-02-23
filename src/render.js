const { list, loadHero, renderComponent, saveHTML } = window.functions;
const body = document.body;
const main = document.createElement('main');
const footer = document.createElement('footer');

main.className = 'container';
footer.className = 'container';
footer.innerHTML = '<small>sDiag is a development by <a href="https://github.com/facu8990/sudesteDiag">Facundo Redón</a>.</small>';

body.appendChild(loadHero(list,renderComponent,main,saveHTML));
body.appendChild(main);
body.appendChild(footer);

