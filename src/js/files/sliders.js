
import Swiper, { Navigation, Pagination, Controller, Autoplay, A11y } from 'swiper';
import "../../scss/base/swiper.scss";

function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}

function initSliders() {
	bildSliders();
	if (document.querySelector('.projects-slider-content')) {
		var one = new Swiper('.projects-slider-content', {
			modules: [Navigation, Pagination, Controller, Autoplay, A11y],
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 100,
			autoHeight: true,
			speed: 1000,
			pagination: {
				el: '.projects-slider-content__pagging',
				bulletClass: 'projects-slider-content__bullet',
				bulletActiveClass: 'projects-slider-content__bullet--active',
				clickable: true,
			},
			navigation: {
				nextEl: '.projects-slider-content .projects-slider-content__arrow--right',
				prevEl: '.projects-slider-content .projects-slider-content__arrow--left',
				disabledClass: 'projects-slider-content__arrow--disabled',
			},
			a11y: {
				enabled: true,
				prevSlideMessage: 'Предыдущий слайд',
				nextSlideMessage: 'Следующий слайд',
				paginationBulletMessage: 'Перейти к слайду {{index}}'
			},
		});
	}
	if (document.querySelector('.projects-slider-gallery')) {
		var two = new Swiper('.projects-slider-gallery', {
			modules: [Controller],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 100,
			autoHeight: true,
			speed: 1000,
		});
	}
	one.controller.control = two;
	two.controller.control = one;
}

window.addEventListener("load", function (e) {
	initSliders();
});