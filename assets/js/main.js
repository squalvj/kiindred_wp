jQuery(document).ready(function($) {
	init();
});

var carousel;

carousel = {
	init: function(){
		carousel.carouselHome();
	},
	carouselHome: function(){
		if ($(".carousel-home").length)
 			$(".owl-carousel").owlCarousel({
				items:1,
				margin:10,
				autoHeight:true,
				autoplay : true,
				autoplayTimeout: 5000,
				loop:true,
				dots: true,
				animateOut: 'fadeOut'
 			});
	}
}

function init(){
	carousel.init();
}