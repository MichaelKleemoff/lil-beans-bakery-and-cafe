// When a user clicks on the "Remove" button for each resource, that resource is removed from the page.
const btnsRemove = document.querySelectorAll('.btn-remove');

btnsRemove.forEach((button) => {
	button.addEventListener('click', (event) => {
		event.target.parentNode.parentNode.parentNode.remove();
	});
});

// The user should have a way to update the "In Stock" value for existing resources. An interaction should change the resource from being "In Stock" to "Out Of Stock" and vice versa.
const btnsStock = document.querySelectorAll('.btn-stock');

btnsStock.forEach((button) => {
	button.addEventListener('click', (event) => {
		if (event.target.nextSibling.textContent === 'In Stock') {
			event.target.nextSibling.classList.add('stock-out');
			event.target.nextSibling.classList.remove('stock-in');
			event.target.nextSibling.textContent = 'Out Of Stock';
		} else {
			event.target.nextSibling.classList.add('stock-in');
			event.target.nextSibling.classList.remove('stock-out');
			event.target.nextSibling.textContent = 'In Stock';
		}
	});
});

// The user should have a way to update the "Has Gluten" value for existing resources. An interaction should change the resource from being "Has Gluten" to "Gluten-Free" and vice versa.
const btnsGluten = document.querySelectorAll('.btn-gluten');

btnsGluten.forEach((button) => {
	button.addEventListener('click', (event) => {
		if (event.target.nextSibling.textContent === 'Has Gluten') {
			event.target.nextSibling.classList.add('gluten-free');
			event.target.nextSibling.classList.remove('gluten-has');
			event.target.nextSibling.textContent = 'Gluten-Free';
		} else {
			event.target.nextSibling.classList.add('gluten-has');
			event.target.nextSibling.classList.remove('gluten-free');
			event.target.nextSibling.textContent = 'Has Gluten';
		}
	});
});

// Footer
// Get the current year and `append` it to the copyright line in the `footer`.
const currentYear = document.querySelector('#current-year');
const date = new Date();
const year = date.getFullYear();

currentYear.append(year);
