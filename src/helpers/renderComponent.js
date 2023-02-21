const { loadArticle } = require('./loadArticle');
const { loadingArticle } = require('./loadingArticle');
const { exec } = require('child_process');

const renderComponent = (component, parent) => {
    const startButton = document.getElementById('start');
    const changeButton = new Event('change');
    let counter = 0;
    startButton.removeAttribute('onclick','href');
    startButton.innerHTML = "";;
    startButton.ariaBusy = true;
    
    startButton.addEventListener(
        'change', () => {
            counter++;
            if (counter === 9) {
                const saveButton = document.createElement('a');
                saveButton.id = 'start';
                saveButton.role = 'button';
                saveButton.href = '#'
                saveButton.onclick = () => console.log('Que no me lo creo tio');
                saveButton.append('Save');
                startButton.replaceWith(saveButton);
            }},
        false
      );

    const loading = loadingArticle(component.title);
    parent.appendChild(loading);
    exec(`powershell Get-CimInstance "${component.command} | ConvertTo-csv | convertfrom-csv | ConvertTo-json"`, (err, stdout, stderr) => {
        if (err) {
            loading.replaceWith(loadArticle(component.title, { Error: stderr }));
            return;
        };
        const output = JSON.parse(stdout);
        if (output.length === undefined) {
            const filtered = Object.fromEntries(
                Object.entries(output).filter(([key, value]) => component.filter.includes(key))
            );
            component.details = filtered;
        } else {
            const list = [];
            output.forEach(item => {
                const filtered = Object.fromEntries(
                    Object.entries(item).filter(([key, value]) => component.filter.includes(key))
                );
                list.push(filtered);
            });
            component.details = list;
        };
        delete component.command;
        loading.replaceWith(loadArticle(component.title, component.details));
        startButton.dispatchEvent(changeButton);
    });
};

module.exports.renderComponent = renderComponent;