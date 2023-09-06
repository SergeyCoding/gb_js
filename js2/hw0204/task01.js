// Необходимо получить список всех пользователей с помощью бесплатного
// API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
// Пользователь должен иметь возможность удалить любого пользователя из списка.
// Данные при получении необходимо сохранить в локальное хранилище браузера localStorage.
// При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

document.querySelector('#GetUsersId').addEventListener('click', getUsers);

function getUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((v) => {
        localStorage.setItem(v.id, v);
        draw(v);
      });
    });
}

function draw(val) {
  document
    .querySelector('#UsersDataId')
    .insertAdjacentHTML(
      'beforeend',
      `<div id="row${val.id}"><p>${val.id}</p> <p>${val.name}</p> <button id="remove${val.id}"}'>remove ${val.id}</button></div>`
    );
  document.querySelector(`#remove${val.id}`).addEventListener('click', () => remove(val.id));
}

function remove(id) {
  console.log('remove', id);
  document.querySelector(`#row${id}`).remove();
}

function runremove(params) {
  console.log('run');
}
