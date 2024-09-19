// Окно feedback

import { modalMenu, addHidden } from "./modal-menu.js";

const chatBtn = modalMenu.querySelector(".links__chat-btn");
const feedback = document.querySelector('.feedback');
const closeFeedbackBtn = feedback.querySelector('.feedback__close-btn');

chatBtn.addEventListener("click", () => {
  addHidden([feedback]);
});

closeFeedbackBtn.addEventListener("click",  () => {
  if (modalMenu.classList.contains('hidden')) {
    addHidden([feedback]);
  } else {
    addHidden([feedback, modalMenu]);
  }
  document.body.style.overflow = 'auto';
});

export { feedback }
