// Accessing necessary nodes
const form = document.querySelector('form');
const inventory = document.querySelector('#inventory');
const inventoryHr = document.querySelector('#inventory hr');

// Form submission
form.addEventListener('submit', (event) => {
	event.preventDefault();

	const productName = document.querySelector('#product-name').value;
	const imageURL = document.querySelector('#product-image').value;
	const productPrice = document.querySelector('#product-price').value;
	const productStock = document.querySelector('#product-stock').value;
	const productGluten = document.querySelector('#product-gluten').value;

	const newProduct = createNewProduct(
		productName,
		imageURL,
		productPrice,
		productStock,
		productGluten
	);

	inventoryHr.insertAdjacentElement('afterend', newProduct);

	form.reset();
});

// Buttons functionality
inventory.addEventListener('click', (event) => {
	// The user should have a way to update the "In Stock" value for existing resources. An interaction should change the resource from being "In Stock" to "Out Of Stock" and vice versa.
	if (event.target.className === 'btn-stock') {
		if (event.target.nextSibling.textContent === 'In Stock') {
			event.target.nextSibling.textContent = 'Out Of Stock';
			event.target.nextSibling.className = 'stock-out';
		} else {
			event.target.nextSibling.textContent = 'In Stock';
			event.target.nextSibling.className = 'stock-in';
		}
	}

	// The user should have a way to update the "Has Gluten" value for existing resources. An interaction should change the resource from being "Has Gluten" to "Gluten-Free" and vice versa.
	if (event.target.className === 'btn-gluten') {
		if (event.target.nextSibling.textContent === 'Has Gluten') {
			event.target.nextSibling.textContent = 'Gluten-Free';
			event.target.nextSibling.className = 'gluten-free';
		} else {
			event.target.nextSibling.textContent = 'Has Gluten';
			event.target.nextSibling.className = 'gluten-has';
		}
	}

	// When a user clicks on the "Remove" button for each resource, that resource is removed from the page.
	if (event.target.className === 'btn-remove') {
		event.target.parentNode.parentNode.parentNode.remove();
	}
});

// Footer
// Get the current year and `append` it to the copyright line in the `footer`.
const currentYear = document.querySelector('#current-year');
const date = new Date();
const year = date.getFullYear();

currentYear.append(year);
