import Swiper from 'swiper';
import { Pagination } from 'swiper/modules'
import { screenWidth } from './swiper-brands.js';

// Работа со слайдером swiper в Brands
let technics = document.querySelector('.technics__container');
//console.log(technics);
let technicsList = technics.querySelector('.technics__list');
//console.log(technicsList);
let technicsItem = technicsList.querySelectorAll('.technics__item');



let swiperTechnics = null;
let paginationTechnics = null;

// Функция для инициализации swiper
let createSwiperTechnics = function () {
  if(!swiperTechnics) {
    // Добавим классы к элементам
    technics.classList.add('swiper');
    technicsList.classList.add('swiper-wrapper');
    technicsItem.forEach(slide => slide.classList.add('swiper-slide'));

    // Пагинация
    paginationTechnics = document.querySelector('.swiper-pagination');

    // Функция для расчета длины прокрутки слайдера
    let windowWidthTechnics = function() {
      let cardW = document.querySelector('.technics__item').offsetWidth; // Ширина слайда
      let totalW = window.innerWidth; // ширина viewport
      let gap = 16; // равняется spaceBetween в swiper
      return (totalW + gap - 16) / (cardW + gap); // 32 вычесть как отступы слева/справа в .container
    };

    let k = windowWidthTechnics(); // Установим результат функции в slidesPerView

    // Инициализируем swiper
    swiperTechnics = new Swiper('.technics__container', {
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
        eventsTarget: ".technics__list",
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
let destroySwiperTechnics = function () {
  if(swiperTechnics) {
    // Удалим классы у элементов
    technics.classList.remove('swiper');
    technicsList.classList.remove('swiper-wrapper');
    technicsItem.forEach(slide => slide.classList.remove('swiper-slide'));

    // Деинициализируем swiper
    swiperTechnics.disable();
    swiperTechnics = null;
    paginationTechnics.remove();
    paginationTechnics = null;
  }
}

// Главная функция - сборщик
document.addEventListener('DOMContentLoaded', function () {
  let windowMainWidth = window.innerWidth;
  if (windowMainWidth <= screenWidth) {
    createSwiperTechnics();
    // Градиент так же зададим только для мобилок
    technics.classList.add('technics-container--gradient');
  } else {
    destroySwiperTechnics();
    technics.classList.remove('technics-container--gradient');
  }
});

export { technics, technicsItem }
