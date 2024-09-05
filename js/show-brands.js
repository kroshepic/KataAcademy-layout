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
                brandsItem[i].classList.toggle('hidden'); // Отобразим бренды
                brandIconShow.classList.toggle('brands__text-show-more-icon--rotate'); // Развернем кнопку
                brandsButtonShow.classList.replace('brands__btn--non-rotate', 'brands__btn--rotate'); // Заменим стили текста кнопки
            } else {
                brandsItem[i].classList.toggle('hidden');
                brandIconShow.classList.toggle('brands__text-show-more-icon--rotate');
                brandsButtonShow.classList.replace( 'brands__btn--rotate', 'brands__btn--non-rotate');
            }
        }
    }
}
