const { contextBridge } = require('electron');
const { loadHero } = require('./helpers/loadHero');
const { renderComponent } = require('./helpers/renderComponent');
const { list } = require('./helpers/commands');
const { saveHTML } = require('./helpers/saveHTML');


contextBridge.exposeInMainWorld('functions', {
	list: list,
	loadHero: loadHero,
	renderComponent: renderComponent,
	saveHTML: saveHTML,
});
