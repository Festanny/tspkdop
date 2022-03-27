$(document).ready(function(){
	$('.carousel-autoplay').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
			  breakpoint: 573,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 431,
			  settings: {
				slidesToShow: 1
			  }
			}
		]
	});
});