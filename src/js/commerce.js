// Откроем окно feedback при клике на "Получить коммерсческое предложение"

import { feedback } from './feedback.js'
import { addHidden } from './modal-menu.js'
import { main } from './nav-links.js'; // Для оптимизации

const takeCommerceBtn = main.querySelector('.content__bottom-btn');

takeCommerceBtn.addEventListener('click', () => {
  addHidden([feedback]);
  feedback.scrollIntoView();
  document.body.style.overflow = 'hidden';
});

