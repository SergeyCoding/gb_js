// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

document.querySelector('#GetDogsId').addEventListener('click', getDogs);

let loading = false;

function getDogs() {
  if (loading) {
    console.log('Кнопку уже нажимали...');
    return;
  }
  loading = true;

  let k = 10;

  nextDog(k, setPicture);
  console.log('#');
}

function nextDog(k, fun) {
  if (k == 0) {
    console.log('Было показано 10 картинок');
    loading = false;
    return;
  }

  const url = 'https://dog.ceo/api/breeds/image/random';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.status);
      fun(data.message);
    });

  setTimeout(() => nextDog(k - 1, fun), 2000);
}

function setPicture(imgUrl) {
  document.querySelector('#imgId').src = imgUrl;
}
