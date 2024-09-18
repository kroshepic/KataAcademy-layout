// Регулировка активных ссылок в модальном окне меню

import { modalMenu } from './modal-menu.js'

const navItemAll = modalMenu.querySelectorAll('.nav__li');

for (let i = 0; i < navItemAll.length; i++) {
    navItemAll[i].addEventListener('click', () => {
        clearActives(navItemAll);
        navItemAll[i].classList.add('active');
    })
}

function clearActives(navItemAll) {
    for (let i = 0; i < navItemAll.length; i++) {
      navItemAll[i].classList.remove('active');
    }
}
export { clearActives }
