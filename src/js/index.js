import {Swiper} from './common';

var mySwiper = new Swiper('.js-services-slider', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 46,
	navigation: {
		nextEl: '.js-services-next',
		prevEl: '.js-services-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1350: {
			slidesPerView: 4,
		},
		1800: {
			slidesPerView: 5,
		},
	  }
})

var topSlider = new Swiper('.js-top-slider', {
	loop: true,
	pagination: {
		el: '.js-swiper-pagination',
	},
	navigation: {
		nextEl: '.js-slider-top-next',
		prevEl: '.js-slider-top-prev',
	},
})