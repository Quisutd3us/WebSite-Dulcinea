/* Iniciamos WOW*/
new WOW().init();

// Iniciamos SmoothScroll

var scroll = new SmoothScroll('a[href*="#"]',{
    // Speed & Easing
	speed: 500, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeOutQuad', // Easing pattern to use
	customEasing: function (time) {}, // Function. Custom easing pattern
});

