const btnsRemove = document.querySelectorAll('.btn-remove');

btnsRemove.forEach((button) => {
	button.addEventListener('click', (event) => {
		event.target.parentNode.parentNode.parentNode.remove();
	});
});
