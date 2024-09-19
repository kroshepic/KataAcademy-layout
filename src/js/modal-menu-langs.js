// Регулировка активного языка в модальном окне меню

import { modalMenu } from './modal-menu.js';
import { clearActives } from './modal-menu-nav.js';

const langsItemAll = modalMenu.querySelectorAll('.langs__li');

for (let i = 0; i < langsItemAll.length; i++) {
  langsItemAll[i].addEventListener('click', () => {
      clearActives(langsItemAll);
      langsItemAll[i].classList.add('active');
  });
}
