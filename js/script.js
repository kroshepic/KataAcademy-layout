// Работа со слайдером swiper
let brands = document.querySelector('.brands__nav');
let brandsList = brands.querySelector('.brands__list');
let brandsItem = brandsList.querySelectorAll('.brands__item');

let swiper = null;
let pagination = null;
let screenWidth = 575;

// Функция для инициализации swiper
let createSwiper = function () {
    if(!swiper) {
        // Добавим классы к элементам
        brands.classList.add('swiper');
        brandsList.classList.add('swiper-wrapper');
        brandsItem.forEach(slide => slide.classList.add('swiper-slide'));

        // Добавим пагинацию
        pagination = document.createElement('div');
        pagination.classList.add('swiper-pagination');
        brands.appendChild(pagination);

        // Функция для расчета длины прокрутки слайдера
        let windowWidth = function() {
            let cardW = document.querySelector('.brands__item').offsetWidth; // Ширина слайда
            let totalW = window.innerWidth; // ширина viewport
            let gap = 16; // равняется spaceBetween в swiper
            return (totalW + gap - 16) / (cardW + gap); // 32 вычесть как отступы слева/справа в .container
        };

        let k = windowWidth(); // Установим результат функции в slidesPerView

        // Инициализируем swiper
        swiper = new Swiper('.brands__nav', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            grabCursor: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
            mousewheel: {
                sensitivity: 1,
                eventsTarget: ".brands__list",
            },
            watchOverflow: true,
            freeMode: false,
            slidesPerView: k,
            spaceBetween: 16,
            slidesPerGroup: 1,
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
        swiper.destroy();
        swiper = null;
        pagination.remove();
        pagination = null;
    }
}

// Главная функция - сборщик
document.addEventListener('DOMContentLoaded', function () {
   $(window).on('load resize', function () {
       let windowMainWidth = $(this).innerWidth();
       if (windowMainWidth <= screenWidth) {
          createSwiper();

          // Градиент так же зададим только для мобилок
          brands.classList.add('brands-container--gradient');
      } else {
          destroySwiper();

          brands.classList.remove('brands-container--gradient');
      }
   });
});



// Работа с кнопкой "Показать все" / "Скрыть"
let brandsButtonShow = brands.querySelector('.brands__btn');

// Иконки
let iconRotateBtn = '<img class="text-show-more__icon text-show-more__icon--rotate" src="images/icons/icon.svg" alt="">Скрыть';
let iconNonRotateBtn = '<img class="text-show-more__icon text-show-more__icon--non-rotate" src="images/icons/icon.svg" alt="">Показать все';

document.addEventListener("DOMContentLoaded", hiddenCloseclick);
brandsButtonShow.addEventListener("click", hiddenCloseclick);

function hiddenCloseclick() {
    let windowWidth = window.innerWidth;
    if(windowWidth > 576 && windowWidth <= 1015) {
        for(let i = 6; i < brandsItem.length; i++) {
            if (brandsItem[i].classList.contains('hidden')){
                brandsItem[i].classList.remove('hidden');
                brandsButtonShow.innerHTML = iconRotateBtn;
            } else {
                brandsItem[i].classList.add('hidden');
                brandsButtonShow.innerHTML = iconNonRotateBtn;
            }
        }
    }
    if (windowWidth > 1015 && windowWidth <= 1375) {
        for(let i = 8; i < brandsItem.length; i++) {
            if (brandsItem[i].classList.contains('hidden')){
                brandsItem[i].classList.remove('hidden');
                brandsButtonShow.innerHTML = iconRotateBtn;
            } else {
                brandsItem[i].classList.add('hidden');
                brandsButtonShow.innerHTML = iconNonRotateBtn;
            }
        }
    }
    if (windowWidth > 1375) {
        for(let i = 10; i < brandsItem.length; i++) {
            if (brandsItem[i].classList.contains('hidden')){
                brandsItem[i].classList.remove('hidden');
                brandsButtonShow.innerHTML = iconRotateBtn;


            } else {
                brandsItem[i].classList.add('hidden');
                brandsButtonShow.innerHTML = iconNonRotateBtn;
            }
        }
    }
}
window.addEventListener('resize', hiddenCloseclick);


