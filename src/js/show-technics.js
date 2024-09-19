import { technics, technicsItem } from './swiper-technics.js'

// Работа с кнопкой "Показать все" / "Скрыть" в technics
document.addEventListener('DOMContentLoaded', function() {
  for (let i = 0; i < technicsItem.length; i++) {
    technicsItem[i].classList.add('hidden')
  }
})


let technicsButtonShow = technics.querySelector('.technics__btn')
let technicIconShow = technics.querySelector('.technics__text-show-more-icon')

technicsButtonShow.addEventListener('click', () => {
  for (let i = 0; i < technicsItem.length; i++) {
    technicsItem[i].classList.toggle('hidden');
  }
  technicIconShow.classList.toggle('rotate');
  technicsButtonShow.classList.toggle('technics__btn--rotate');
})
