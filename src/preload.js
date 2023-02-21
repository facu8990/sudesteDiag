// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge } = require('electron');

const { loadHero } = require('./helpers/loadHero');
const { renderComponent } = require('./helpers/renderComponent');
const { list } = require('./helpers/commands');

contextBridge.exposeInMainWorld('functions', {
	list: list,
	loadHero: loadHero,
	renderComponent: renderComponent,
});
