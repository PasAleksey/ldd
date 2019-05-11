$(function() {

	// header shadow on scroll
	$(document).scroll(function () {
		$('header').addClass('shadow');
		if ( $(document).scrollTop() == 0 ) {
			$('header').removeClass('shadow');
			// let win_h = $(window).height();
			// $("html, body").animate({scrollTop: win_h});
		}
	});

	// end
	// owl carousel

	$(document).ready(function(){
		// main-projects
		$('.owl-carousel-main-projects').owlCarousel({
			loop: true,
			center:true,
			margin: 30,
			nav: true,
			navContainer: '.owl-nav-main-projects',
			navText: [ '', '' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});
		// main-partners
		$('.owl-carousel-main-partners').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			navContainer: '.owl-nav-main-partners',
			navText: [ '', '' ]
		});
	});
	//end
	// header-search
	$('.header-search label').on('click', function () {
		$('.header-search-input').addClass('active').focus().blur(function () {
			if ( $('.header-search-input').val() == 0 ) {
				$('.header-search-input').removeClass('active')
			}
		});
	});
	//end
});
