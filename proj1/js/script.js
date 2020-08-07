$(document).ready(main);

var contador = 1;

function main() {
	$('.linkB').click(function () {
		// $('nav').toggle(); 

		if (contador == 1) {
			$('.nav__bottom').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.nav__bottom').animate({
				left: '-100%'
			});
		}

	});

};