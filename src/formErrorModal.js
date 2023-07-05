const openModal = () => {
	modal.classList.remove('hidden');
};

const closeModal = () => {
	modal.classList.add('hidden');
};

function newLi(productName, productPrice, nameError, priceError) {
	if (productName.length > 0 && productName.length < 3) {
		productNameLi.innerText = nameError;
		modalUl.append(productNameLi);
		productPriceLi.remove();
	}
	if (productPrice < 1.0) {
		productPriceLi.innerText = priceError;
		modalUl.append(productPriceLi);
		productNameLi.remove();
	}
	if (productName.length > 0 && productName.length < 3 && productPrice < 1.0) {
		modalUl.append(productNameLi);
		modalUl.append(productPriceLi);
	}
}

function formErrorModal(
	productName,
	imageURL,
	productPrice,
	productStock,
	productGluten
) {
	if (productName.length > 0 && productName.length < 3) {
		throw 'Product name must have 3 characters or more.';
	}
	if (productPrice < 1.0) {
		throw 'Price must be at least $1.00 or more.';
	}
	if (productName.length > 0 && productName.length < 3 && productPrice < 1.0) {
		throw 'An error has occurred. Please check product name and product price field!';
	}

	const newProduct = createNewProduct(
		productName,
		imageURL,
		productPrice,
		productStock,
		productGluten
	);

	closeModal();

	return inventoryHr.insertAdjacentElement('afterend', newProduct);
}
