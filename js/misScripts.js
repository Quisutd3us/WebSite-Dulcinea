/* Iniciamos WOW*/
new WOW().init();

// Iniciamos SmoothScroll

var scroll = new SmoothScroll('a[href*="#"]', {
	// Speed & Easing
	speed: 1200, // Integer. How fast to complete the scroll in milliseconds
	offset: 50, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeOutQuad' // Easing pattern to use
});

// codigo boton ir arriba para q aparezca solo despues del header

$(function () {
	$(window).scroll(function () {
		var miScroll = $(this).scrollTop();
		if (miScroll > 100) {
			$("#subir").css('opacity', '0.8');

		} else {
			$("#subir").css('opacity', '0');

		}
	})
})

// Cabezera animada



$(window).scroll(function () {
	var nav = $('#menuNav');
	var scroll = $(window).scrollTop();
	if (scroll >= 684) {
		nav.addClass("fondoMenu");
	} else {
		nav.removeClass("fondoMenu");
	}
})