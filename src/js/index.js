import {Swiper} from './common';

var mySwiper = new Swiper('.js-services-slider', {
	loop: true,
	slidesPerView: 5,
	spaceBetween: 46,
	navigation: {
		nextEl: '.js-services-next',
		prevEl: '.js-services-prev',
	},
})