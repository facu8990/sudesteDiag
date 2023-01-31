const { loadArticle } = require('./loadArticle')
const { loadingArticle } = require('./loadingArticle')
const { exec } = require('child_process')

const renderComponent = (component, parent) => {
    const loading = loadingArticle(component.title)
    parent.appendChild(loading);

    exec(`powershell Get-CimInstance "${component.command} | ConvertTo-csv | convertfrom-csv | ConvertTo-json"`, (err, stdout, stderr) => {
        if (err) {
            console.log(stderr)
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
        loading.replaceWith(loadArticle(component.title,component.details));
    })

}

module.exports.renderComponent = renderComponent;