// Работа со слайдером swiper в Brands
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


let body = document.querySelector('body');
let brands = document.querySelector('.brands__container');
let brandsList = brands.querySelector('.brands__list');
let brandsItem = brandsList.querySelectorAll('.brands__item');

let swiper = null;
let pagination = null;
let screenWidth = 767;

// Функция для инициализации swiper
let createSwiper = function () {
    if(!swiper) {
        // Добавим классы к элементам
        brands.classList.add('swiper');
        brandsList.classList.add('swiper-wrapper');
        brandsItem.forEach(slide => slide.classList.add('swiper-slide'));

        // Пагинация
        pagination = document.querySelector('.swiper-pagination');

        // Функция для расчета длины прокрутки слайдера
        let windowWidthBrands = function() {
            let cardW = document.querySelector('.brands__item').offsetWidth; // Ширина слайда
            let totalW = window.innerWidth; // ширина viewport
            let gap = 16; // равняется spaceBetween в swiper
            return (totalW + gap - 16) / (cardW + gap); // 32 вычесть как отступы слева/справа в .container
        };

        let k = windowWidthBrands(); // Установим результат функции в slidesPerView

        // Инициализируем swiper
        swiper = new Swiper('.brands__container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            grabCursor: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },/*
            mousewheel: {
                sensitivity: 1,
                eventsTarget: ".brands__list",
            },*/
            watchOverflow: true,
            freeMode: false,
            slidesPerView: k,
            spaceBetween: 16,
            slidesPerGroup: 1,
          modules: [Pagination]
        });

    }
}

// Функция для деинициализации swiper
let destroySwiper = function () {
    if(swiper) {
        // Удалим классы у элементов
        brands.classList.remove('swiper');
        brandsList.classList.remove('swiper-wrapper');
        brandsItem.forEach(slide => slide.classList.remove('swiper-slide'));

        // Деинициализируем swiper
        swiper.disable();
        swiper = null;
        pagination.remove();
        pagination = null;
    }
}

// Главная функция - сборщик
document.addEventListener('DOMContentLoaded', function () {
    let windowMainWidth = window.innerWidth;
    if (windowMainWidth <= screenWidth) {
        createSwiper();
        // Градиент так же зададим только для мобилок
        brands.classList.add('brands-container--gradient');
    } else {
        destroySwiper();
        brands.classList.remove('brands-container--gradient');
    }
});

export { brands, brandsItem, screenWidth };
