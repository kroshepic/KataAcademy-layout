// Для каждой кнопки "Заказать" в услугах добавим открытие окна feedback

import { feedback } from './feedback.js';
import { addHidden } from './modal-menu.js';
import { main } from './nav-links.js'; // Для оптимизации

const orderAllBtn = main.querySelectorAll('.prices__link');

for (let i = 0; i < orderAllBtn.length; i++) {
  orderAllBtn[i].addEventListener('click', () => {
    addHidden([feedback]);
    feedback.scrollIntoView(); // Прокрутит вьюпорт к началу элемента
    document.body.style.overflow = 'hidden';
  })
}


