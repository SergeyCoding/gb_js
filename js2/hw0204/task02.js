// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

document.querySelector('#GetDogsId').addEventListener('click', getDogs);

function getDogs() {
  const url = 'https://dog.ceo/api/breeds/image/random';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
