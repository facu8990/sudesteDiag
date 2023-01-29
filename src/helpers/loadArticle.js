const loadArticle = (item) => {
    const article = document.createElement('article');
    const header = document.createElement('header');
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');
    const p = document.createElement('p');
    article.id = item.title
    p.ariaBusy = true;
    h2.append(item.title);
    header.appendChild(h2);
    article.appendChild(header);
    article.appendChild(p);
    document.getElementById('start').ariaBusy = 'true';
    document.getElementById('start').textContent = 'Loading';
    exec(`powershell Get-CimInstance "${item.command} | ConvertTo-csv | convertfrom-csv | ConvertTo-json"`, (err, stdout, stderr) => {
        if (err) {
            p.ariaBusy = 'false'
            p.append(stderr)
            return;
        };
        p.remove();
        const output = JSON.parse(stdout);
        if (output.length === undefined) {
            Object.keys(output).forEach(prop => {
                if (output[prop] === "" || output[prop] === null) {
                    delete output[prop];
                }
            });
            Object.entries(output).forEach(component => {
                if (component[1] !== null) {
                    if (component[1].length > 0) {
                        const li = document.createElement('li');
                        li.append(`${component[0]}: ${component[1]}`);
                        ul.appendChild(li);
                    }
                }
            });
            article.appendChild(ul);
        } else {

            const list = [];
            output.forEach(item => {
                Object.keys(item).forEach(prop => {
                    if (item[prop] === "" || item[prop] === null) {
                        delete item[prop];
                    }
                });
                list.push(item);
            });
        };
        document.getElementById('start').ariaBusy = 'false';
        document.getElementById('start').textContent = 'Loading';
    });

    return article;
}

module.exports.loadArticle = loadArticle;