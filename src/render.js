const { list, loadHero, renderComponent } = window.functions;
const body = document.body;
const main = document.createElement('main');
const footer = document.createElement('footer');
main.className = 'container';
footer.className = 'container';
footer.innerHTML = `<small>SudesteDiag es un desarrollo de Facundo Redon</small>`;

body.appendChild(loadHero(list,renderComponent,main));
body.appendChild(main);
body.appendChild(footer);

