const loadingArticle = (title) => {
	const article = document.createElement('article');
	const header = document.createElement('header');
	const h2 = document.createElement('h2');
	const p = document.createElement('p');
	article.id = title;
	h2.append(title);
	p.ariaBusy = true;
	header.appendChild(h2);
	article.appendChild(header);
	article.appendChild(p);
	return article;
};

module.exports.loadingArticle = loadingArticle;
