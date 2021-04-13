let user = { name: 'Lorem', phone: 000 };
let currentCity = 'Bulacan';

window.onload = function () {
	document.querySelector(
		'#current-location h2'
	).innerText = `${currentCity} City`;
};
