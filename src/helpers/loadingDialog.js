const loadingDialog = (title) => {
    const dialog = document.createElement('dialog');
    dialog.id = 'dialog';
    dialog.open = 'true';
    const article = document.createElement('article');
    const close = document.createElement('a');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    article.id = title;
    h2.append(title);
    p.ariaBusy = true;
    close.href = '#close';
    close.ariaLabel = 'Close';
    close.className = 'close';
    close.onclick = () => closingDialog(dialog);
    article.append(close)
    article.appendChild(h2);
    article.appendChild(p);
    dialog.appendChild(article);
    return dialog;
};

module.exports.loadingDialog = loadingDialog;
