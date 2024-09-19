import { orderCallBlock } from './order-call.js';
import { header } from './put-requisition.js';
import { addHidden } from './modal-menu.js';
import { feedback } from './feedback'

const repairStatusBtn = header.querySelector('.nav__link--repair-status');

repairStatusBtn.addEventListener('click', () => {
    orderCallBlock.scrollIntoView();
    document.body.style.overflow = 'hidden';
    addHidden([orderCallBlock]);
});

