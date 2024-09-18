import { orderCallBlock } from './order-call.js';
import { header } from './put-requisition.js';
import { addHidden } from './modal-menu.js';

const repairStatusBtn = header.querySelector('.nav__link--repair-status');

repairStatusBtn.addEventListener('click', () => {
    addHidden([orderCallBlock]);
});

