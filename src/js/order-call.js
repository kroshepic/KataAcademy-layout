import { modalMenu, addHidden } from './modal-menu.js';
const orderCallBlock = document.querySelector('.order-call');

const callBtn = document.querySelector('.links__phone-btn');
const closeBtn = orderCallBlock.querySelector('.order-call__close-icon');

callBtn.addEventListener('click', () => {
  addHidden([orderCallBlock]);
});
closeBtn.addEventListener('click', () => {
  addHidden([orderCallBlock, modalMenu]);
  document.body.style.overflow = 'auto';
})

export { orderCallBlock }



