function createNewProduct(product, imageURL, price, stock, gluten) {
	const article = document.createElement('article');
	const imgAside = document.createElement('aside');
	const descrAside = document.createElement('aside');
	const img = document.createElement('img');
	const h3 = document.createElement('h3');
	const hr = document.createElement('hr');
	const h4 = document.createElement('h4');
	const priceSpan = document.createElement('span');
	const stockSpan = document.createElement('span');
	const glutenSpan = document.createElement('span');
	const divStock = document.createElement('div');
	const divGluten = document.createElement('div');
	const divRemoveBtn = document.createElement('div');
	const pStock = document.createElement('p');
	const pGluten = document.createElement('p');
	const btnStock = document.createElement('button');

	const btnGluten = document.createElement('button');
	const btnRemove = document.createElement('button');

	img.setAttribute('src', imageURL);
	img.setAttribute('alt', 'product image');
	imgAside.className = 'product-img';
	imgAside.append(img);

	h3.className = 'product-name';
	h3.textContent = product;

	h4.textContent = 'price: ';
	priceSpan.className = 'price';
	priceSpan.textContent = `$${price}`;
	h4.append(priceSpan);

	btnStock.className = 'btn-stock';
	btnStock.setAttribute('type', 'button');
	btnStock.textContent = 'Stock';
	stockSpan.className = stock === 'In Stock' ? 'stock-in' : 'stock-out';
	stockSpan.textContent = stock;
	pStock.append(btnStock);
	pStock.append(stockSpan);
	divStock.append(pStock);

	btnGluten.className = 'btn-gluten';
	btnGluten.setAttribute('type', 'button');
	btnGluten.textContent = 'Gluten';
	glutenSpan.className = gluten === 'Has Gluten' ? 'gluten-has' : 'gluten-free';
	glutenSpan.textContent = gluten;
	pGluten.append(btnGluten);
	pGluten.append(glutenSpan);
	divGluten.append(pGluten);

	btnRemove.className = 'btn-remove';
	btnRemove.setAttribute('type', 'button');
	btnRemove.textContent = 'Remove';
	divRemoveBtn.append(btnRemove);

	descrAside.className = 'product-description';
	descrAside.append(h3);
	descrAside.append(hr);
	descrAside.append(h4);
	descrAside.append(divStock);
	descrAside.append(divGluten);
	descrAside.append(divRemoveBtn);

	article.className = 'product';
	article.append(imgAside);
	article.append(descrAside);

	return article;
}
