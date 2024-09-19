import { feedback } from './feedback.js'

// Имитация отправки данных с формы в окне feedback, с очисткой полей после отправки

const feedbackInputsAll = feedback.querySelectorAll('.feedback__input');
const feedbackSendBtn = feedback.querySelector('.feedback__send-btn');

feedbackSendBtn.addEventListener('click', () => {
  alert('Ваше сообщение отправлено!')
  for (let i = 0; feedbackInputsAll.length; i++){
    feedbackInputsAll[i].value = '';
  }
})


// Имитация отправки данных с формы в окне order-call, с очисткой полей после отправки

import { orderCallBlock } from './order-call.js';

const orderCallInputsAll = orderCallBlock.querySelectorAll('.order-call__input');
const orderCallSendBtn = orderCallBlock.querySelector('.order-call__send-btn');

orderCallSendBtn.addEventListener('click', () => {
  alert('Мы свяжемся с вами!');
  for (let i = 0; orderCallInputsAll.length; i++){
    orderCallInputsAll[i].value = '';
  }
})

