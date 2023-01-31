const loadArticle = (title, content) => {
    const article = document.createElement('article');
    const header = document.createElement('header');
    const h2 = document.createElement('h2');
    article.id = title
    h2.append(title);
    header.appendChild(h2);
    article.appendChild(header);
    if (content.length === undefined) {
        const ul = document.createElement('ul');
        Object.entries(content).forEach(component => {
            if (component[1] !== null) {
                if (component[1].length > 0) {
                    const li = document.createElement('li');
                    li.append(`${component[0]}: ${component[1]}`);
                    ul.appendChild(li);
                }
            }
        });
        article.appendChild(ul);
    } else if (content.length < 5) {
        const grid = document.createElement('div');
        grid.className = 'grid'
        content.forEach(component => {
            const gridElement = document.createElement('div');
            const p = document.createElement('p');
            p.append(component)
            gridElement.appendChild(p);
            grid.appendChild(gridElement);
        });
        article.appendChild(grid);

    } else {
        const figure = document.createElement('figure');
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const trHead = document.createElement('tr');
        table.role = 'grid'
        thead.appendChild(trHead);
        table.appendChild(thead);
        table.appendChild(tbody);
        figure.appendChild(table);
        
        
        Object.keys(content[0]).forEach(title => {
            const th = document.createElement('th');
            th.scope = 'col';
            th.append(title);
            trHead.appendChild(th);
        })
        
        
        content.forEach(component => {
            const trBody = document.createElement('tr');
            Object.entries(component).forEach(row => {
                const td = document.createElement('td');
                td.append(row[1])
                trBody.appendChild(td);
            })
            tbody.appendChild(trBody);
        });
        article.appendChild(figure);
    };

    return article;
}

module.exports.loadArticle = loadArticle;