const loadArticle = (title,content) => {
    const article = document.createElement('article');
    const header = document.createElement('header');
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');
    article.id = title
    h2.append(title);
    header.appendChild(h2);
    article.appendChild(header);
    if (content.length === undefined) {
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
    } else {

    };

    return article;
}

module.exports.loadArticle = loadArticle;