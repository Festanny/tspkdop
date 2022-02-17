$(document).ready(function(){
	if ($(window).width() >= 573) {
		$('.carousel-autoplay').slick({
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
		  });
	}
	else if ($(window).width() < 573) {
		$('.carousel-autoplay').slick({
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
		  });
	}
});



// $(document).on('ready', function() {
// 	if ($(window).width() >= 769) {
// 		$(".regular").slick({
// 			dots: true,
// 			infinite: true,
// 			slidesToShow: 3,
// 			slidesToScroll: 3
// 		});
// 	}
// 	else if ($(window).width() > 480 && $(window).width() < 769) {
// 		$(".regular").slick({
// 			dots: true,
// 			infinite: true,
// 			slidesToShow: 2,
// 			slidesToScroll: 2
// 		});
// 	}
// 	else {
// 		$(".regular").slick({
// 			dots: true,
// 			infinite: true,
// 			slidesToShow: 1,
// 			slidesToScroll: 1
// 		});
// 	}
// });