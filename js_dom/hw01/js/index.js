import { jsonData } from './jsonData.js';

function loading() {
  const container = document.querySelector('.table tbody');

  console.log(container);

  for (const item of jsonData()) {
    container.append(createRow(item));
  }
}

loading();

function createRow({ name, date, maxPersonCount, currentPersonCount, isRecorded }) {
  console.log({ name, date, maxPersonCount, currentPersonCount, isRecorded });
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
    btn.textContent = 'Отмена записи';
  } else {
    btn.textContent = 'Записаться';

    if (currentPersonCount >= maxPersonCount) {
      btn.classList.add('disabled');
    }
  }

  return btn;
}

function onBtnClick() {
  console.log(this);
  //   const btn = document.createElement('button');
  //   btn.className = 'btn btn-primary';

  //   if (this.isRecorded) {
  //     btn.textContent = 'Отмена записи';
  //     return btn;
  //   }

  //   if (this.currentPersonCount < this.maxPersonCount) {
  //     btn.textContent = 'Отмена записи';
  //     return btn;
  //   }

  //   btn.textContent = 'Записаться';
  //   return btn;
}
