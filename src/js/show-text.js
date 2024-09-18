// Регулировка отображения текста, отображения текста на кнопке и вращение иконки

import { main } from './nav-links.js'

const showMoreTextBtn = main.querySelector('.content__button');
const text = main.querySelector('.content__text--paragraf');
const iconToRotate = main.querySelector('.content__show-more-icon');

showMoreTextBtn.addEventListener('click', () => {
  iconToRotate.classList.toggle('rotate');
  text.classList.toggle('show');
  showMoreTextBtn.classList.toggle('content__button--non-show')
})
