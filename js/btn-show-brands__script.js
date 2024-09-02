/*
// Работа с кнопкой "Показать все" / "Скрыть" в Brands

let brandsButtonShow = brands.querySelector('.brands__btn');

// Иконки
let iconRotateBtn = '<img class="text-show-more__icon text-show-more__icon--rotate" src="../images/icons/icon.svg" alt="">Скрыть';
let iconNonRotateBtn = '<img class="text-show-more__icon text-show-more__icon--non-rotate" src="../images/icons/icon.svg" alt="">Показать все';

document.addEventListener("DOMContentLoaded", hiddenCloseClick);
brandsButtonShow.addEventListener("click", hiddenCloseClick);

function hiddenCloseClick() {
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
window.addEventListener('resize', hiddenCloseClick);*/

// Работа с кнопкой "Показать все" / "Скрыть" в Brands
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < brandsItem.length; i++) {
        brandsItem[i].classList.add('hidden');
    }
});


let brandsButtonShow = brands.querySelector('.brands__btn');
let brandIconShow = brands.querySelector('.brands__text-show-more-icon')

brandsButtonShow.addEventListener("click", hiddenCloseClick);

function hiddenCloseClick() {
    for (let i = 0; i < brandsItem.length; i++) {
        for (let i = 0; i < brandsItem.length; i++) {
            if(brandsItem[i].classList.contains('hidden')) {
                brandsItem[i].classList.remove('hidden'); // Отобразим бренды
                brandIconShow.classList.add('text-show-more__icon--rotate'); // Развернем кнопку
                brandsButtonShow.classList.replace('brands__btn--non-rotate', 'brands__btn--rotate'); // Заменим стили текста кнопки
            } else {
                brandsItem[i].classList.add('hidden');
                brandIconShow.classList.remove('text-show-more__icon--rotate');
                brandsButtonShow.classList.replace( 'brands__btn--rotate', 'brands__btn--non-rotate');
            }
        }
    }
}
