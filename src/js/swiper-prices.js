import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { screenWidth } from './swiper-brands.js';

// Работа со слайдером swiper в Brands
let prices = document.querySelector('.prices__container');
let pricesList = prices.querySelector('.prices__list');
let pricesItem = pricesList.querySelectorAll('.prices__item');


let swiperPrice = null;
let paginationPrice = null;

// Функция для инициализации swiper
let createSwiperPrice = function () {
  if(!swiperPrice) {
    // Добавим классы к элементам
    prices.classList.add('swiper');
    pricesList.classList.add('swiper-wrapper');
    pricesItem.forEach(slide => slide.classList.add('swiper-slide'));

    // Пагинация
    paginationPrice = document.querySelector('.swiper-pagination');

    // Функция для расчета длины прокрутки слайдера
    let windowWidthPrices = function() {
      let cardW = document.querySelector('.prices__item').offsetWidth; // Ширина слайда
      let totalW = window.innerWidth; // ширина viewport
      let gap = 16; // равняется spaceBetween в swiper
      return (totalW + gap - 16) / (cardW + gap); // 32 вычесть как отступы слева/справа в .container
    };

    let k = windowWidthPrices(); // Установим результат функции в slidesPerView

    // Инициализируем swiper
    swiperPrice = new Swiper('.prices__container', {
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
        eventsTarget: ".prices__list",
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
let destroySwiperPrice = function () {
  if(swiperPrice) {
    // Удалим классы у элементов
    prices.classList.remove('swiper');
    pricesList.classList.remove('swiper-wrapper');
    pricesItem.forEach(slide => slide.classList.remove('swiper-slide'));

    // Деинициализируем swiper
    swiperPrice.disable();
    swiperPrice = null;
    paginationPrice.remove();
    paginationPrice = null;
  }
}

// Главная функция - сборщик
document.addEventListener('DOMContentLoaded', function () {
  let windowMainWidth = window.innerWidth;
  if (windowMainWidth <= screenWidth) {
    createSwiperPrice();
    // Градиент так же зададим только для мобилок
    prices.classList.add('prices-container--gradient');
  } else {
    destroySwiperPrice();
    prices.classList.remove('prices-container--gradient');
  }
});

export { prices, pricesList, pricesItem }
