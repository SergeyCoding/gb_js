import { jsonData } from './jsonData.js';

const DO_RECORD = 'Записаться';
const CANCEL_RECORD = 'Отмена записи';

function loading() {
  const container = document.querySelector('.table tbody');

  for (const item of jsonData()) {
    container.append(createRow(item));
  }
}

function createRow({ name, date, maxPersonCount, currentPersonCount, isRecorded }) {
  const node = document.createElement('tr');

  node.insertAdjacentHTML('beforeend', `<td >${name}</td>`);
  node.insertAdjacentHTML('beforeend', `<td >${date.toLocaleDateString()}</td>`);
  node.insertAdjacentHTML('beforeend', `<td >${maxPersonCount}</td>`);
  node.insertAdjacentHTML('beforeend', `<td >${currentPersonCount}</td>`);

  const td = document.createElement('td');
  td.appendChild(generateBtn(maxPersonCount, currentPersonCount, isRecorded));
  node.insertAdjacentElement('beforeend', td);

  return node;
}

function generateBtn(maxPersonCount, currentPersonCount, isRecorded) {
  const btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.onclick = onBtnClick;

  if (isRecorded) {
    btn.textContent = CANCEL_RECORD;
  } else {
    btn.textContent = DO_RECORD;

    if (currentPersonCount >= maxPersonCount) {
      btn.classList.add('disabled');
    }
  }

  return btn;
}

function onBtnClick() {
  const btnText = this.textContent;
  const currentCount = this.parentElement.previousSibling.textContent;
  const maxCount = this.parentElement.previousSibling.previousSibling.textContent;
  console.log(maxCount, currentCount, btnText);

  if (btnText === DO_RECORD) {
    this.parentElement.previousSibling.textContent = Number(this.parentElement.previousSibling.textContent) + 1;
    this.textContent = CANCEL_RECORD;
    return;
  }

  if (btnText === CANCEL_RECORD) {
    this.parentElement.previousSibling.textContent = Number(this.parentElement.previousSibling.textContent) - 1;
    this.textContent = DO_RECORD;
  }
}

loading();
