// Меню слева

const modalMenu = document.querySelector('.modal-menu');
const menuOpenBtn = document.querySelector('.header__menu-btn');
const menuCloseBtn = document.querySelector('.modal-menu__close-btn');

menuOpenBtn.addEventListener('click', e => {
  openModal();
})
menuCloseBtn.addEventListener('click', e => {
  closeModal();
})

function openModal() {
  addHidden([modalMenu]);
  document.body.style.overflow = 'hidden'; // Не придумал как по-другому закрыть "дыру" под modalMenu из-за разности высоты блока и всего контента
}
function closeModal() {
  addHidden([modalMenu]);
  document.body.style.overflow = 'auto';
}
function addHidden (vars) {
  for (let i = 0; i < vars.length; i++) {
    vars[i].classList.toggle('hidden');
  }
}
export { modalMenu, addHidden  }
