$(document).ready(init);

/*function init() {
	let btnLinkHeader = document.querySelector('.linkB');

	btnLinkHeader.addEventListener('click', function () {

		btnLinkHeader.classList.toggle('addStyle', 'nav');
	});
}*/
var contador = 1;

function init() {
	$('.linkB').click(function () {
		$('nav').toggle();
	})
}