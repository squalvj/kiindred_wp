function init(){carousel.init()}var carousel;jQuery(document).ready(function(o){init()}),carousel={init:function(){carousel.carouselHome()},carouselHome:function(){$(".carousel-home").length&&$(".owl-carousel").owlCarousel({items:1,margin:10,autoHeight:!0,autoplay:!0,autoplayTimeout:5e3,loop:!0,dots:!0,animateOut:"fadeOut"})}};