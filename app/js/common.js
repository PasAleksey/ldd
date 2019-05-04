$(function() {

	// header shadow on scroll
	$(document).scroll(function () {
		$('header').addClass('shadow');
		if ( $(document).scrollTop() == 0 ) {
			$('header').removeClass('shadow');
		}
	});
	// end
	// owl carousel

	$(document).ready(function(){
		// main-projects
		$('.owl-carousel-main-projects').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			navContainer: '.owl-nav-main-projects',
			navText: [ '', '' ],
			startPosition: 7
		});
		// main-partners
		$('.owl-carousel-main-partners').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			navContainer: '.owl-nav-main-partners',
			navText: [ '', '' ],
			startPosition: 1
		});
	});
	//end

});
