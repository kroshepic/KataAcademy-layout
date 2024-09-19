// Добавить / удалить active у ссылок в навигации

const main = document.querySelector('.main');
const navItems = main.querySelectorAll('.nav__item');

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
      removeActive(navItems); // Удалим класс active у других ссылок
      navItems[i].classList.add('active');
    });
}

function removeActive (navItems) {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }
}

export { main }
