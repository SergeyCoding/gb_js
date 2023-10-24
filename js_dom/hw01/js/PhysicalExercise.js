/**
 *         <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><button>Записаться</button> <button>Отменить запись</button></td>
        </tr>
 */
class PhysicalExercise {
  constructor(name, time, maxPersonCount, initPersonCount, isRecorded) {
    this.name = name;
    this.time = time;
    this.maxPersonCount = maxPersonCount;
    this.currentPersonCount = initPersonCount;
    this.isRecorded = isRecorded;
  }

  record() {
    this.currentPersonCount++;
  }

  remove() {
    this.currentPersonCount--;
  }

  generateHtmlElement() {
    const node = document.createElement('tr');

    return `<td scope="row">${item.name}</td>
    <td>${item.date.toLocaleDateString()}</td>
    <td>${item.maxPersonCount}</td>
    <td>${item.currentPersonCount}</td>
    <td data-record="${
      this.isRecorded
    }"><button class="btn btn-primary">Записаться</button> <button>Отменить запись</button></td>`;

    return node;
  }

  generateHtmlButton() {
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';

    if (this.isRecorded) {
      btn.textContent = 'Отмена записи';
      return btn;
    }

    if (this.currentPersonCount < this.maxPersonCount) {
      btn.textContent = 'Отмена записи';
      return btn;
    }

    btn.textContent = 'Записаться';
    return btn;
  }
}
