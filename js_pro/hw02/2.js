"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для 
отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако 
если длина введенного отзыва менее 50 или более 500 символов, функция должна 
генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

for (const item of initialData) {
  item.reviews.forEach((x) => addReview({ product: item.product, review: x.text }, false));
}

document.querySelector(".send-button").addEventListener("click", sendMessage);

function sendMessage() {
  const product = document.querySelector(".send-product").value;
  const review = document.querySelector(".send-message").value;
  addReview({ product, review });
}

/**
 *
 * @param {{product:string, review:string}} message
 * @param {boolean} isValidate
 */
function addReview(message, isValidate = true) {
  if (isValidate && message.product.length < 1) {
    throw new Error("Не указан товар");
  }

  if (isValidate && message.review.length < 50) {
    throw new Error("Длина введенного отзыва менее 50 символов");
  }

  if (isValidate && message.review.length > 500) {
    throw new Error("Длина введенного отзыва более 500 символов");
  }

  const sc = document.querySelector(".send-container");

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<h1>${message.product}</h1><p>${message.review}</p>`;

  sc.append(newDiv);
}
