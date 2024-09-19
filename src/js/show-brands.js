import { brands, brandsItem } from './swiper-brands.js';

// Работа с кнопкой "Показать все" / "Скрыть" в Brands
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < brandsItem.length; i++) {
        brandsItem[i].classList.add('hidden');
    }
});


let brandsButtonShow = brands.querySelector('.brands__btn');
let brandIconShow = brands.querySelector('.brands__text-show-more-icon')

brandsButtonShow.addEventListener("click", () => {
  for (let i = 0; i < brandsItem.length; i++) {
    brandsItem[i].classList.toggle('hidden'); // Отобразим бренды
  }
  brandIconShow.classList.toggle('brands__text-show-more-icon--rotate'); // Развернем кнопку
  brandsButtonShow.classList.toggle('brands__btn--rotate'); // Заменим стили текста кнопки
});
