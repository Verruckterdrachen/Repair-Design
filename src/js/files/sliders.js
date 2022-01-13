
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
		var projectsSliderContent = new Swiper('.projects-slider-content', {
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
				el: '.projects-slider-content .swiper-pagination-bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.projects-slider-content .swiper-button-right',
				prevEl: '.projects-slider-content .swiper-button-left'
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
		var projectsSliderGallery = new Swiper('.projects-slider-gallery', {
			modules: [Controller],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 100,
			autoHeight: true,
			speed: 1000,
		});
	}
	projectsSliderContent.controller.control = projectsSliderGallery;
	projectsSliderGallery.controller.control = projectsSliderContent;
	if (document.querySelector('.steps-slider-content')) {
		const fraction = document.querySelector('.steps-slider-content__fraction');
		const slides = document.querySelectorAll('.slide-steps-content');
		const items = document.querySelectorAll('.gallery-steps__item');
		const slideCount = slides.length;
		items[0].classList.add('_active');
		fraction.textContent = `1/${slideCount}`;
		var stepsSliderContent = new Swiper('.steps-slider-content', {
			modules: [Navigation, Pagination, Controller, Autoplay, A11y],
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 100,
			speed: 1000,
			pagination: {
				el: '.steps-slider-content .swiper-pagination-bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.steps-slider-content .swiper-button-right',
				prevEl: '.steps-slider-content .swiper-button-left'
			},
			a11y: {
				enabled: true,
				prevSlideMessage: 'Предыдущий слайд',
				nextSlideMessage: 'Следующий слайд',
				paginationBulletMessage: 'Перейти к слайду {{index}}'
			},
			on: {
				slideChange: () => {
					fraction.textContent = `${stepsSliderContent.realIndex + 1}/${slideCount}`;
					items.forEach(item => {
						item.classList.remove('_active');
					});
					items[stepsSliderContent.realIndex].classList.add('_active');
				}
			}
		});
	}
	if (document.querySelector('.gallery-steps__slider')) {
		var stepsSliderGallery = new Swiper('.gallery-steps__slider', {
			modules: [Controller],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 100,
			autoHeight: true,
			speed: 1000,
		});
	}
	stepsSliderContent.controller.control = stepsSliderGallery;
	stepsSliderGallery.controller.control = stepsSliderContent;
}

window.addEventListener("load", function (e) {
	initSliders();
});