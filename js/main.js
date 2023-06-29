// When a user clicks on the "Remove" button for each resource, that resource is removed from the page.
const btnsRemove = document.querySelectorAll('.btn-remove');

btnsRemove.forEach((button) => {
	button.addEventListener('click', (event) => {
		event.target.parentNode.parentNode.parentNode.remove();
	});
});

// Footer
// Get the current year and `append` it to the copyright line in the `footer`.
const currentYear = document.querySelector('#current-year');
const date = new Date();
const year = date.getFullYear();

currentYear.append(year);
