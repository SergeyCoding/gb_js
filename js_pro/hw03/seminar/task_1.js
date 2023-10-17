/*
Задание 1:
Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся"
во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на
кнопку "Загрузить новости", ваш код должен имитировать задержку, словно
происходит реальная загрузка данных из внешнего источника, а после этой
задержки — отображать новости на странице.

1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером
для их отображения.
2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна
имитировать задержку в 2 секунды перед успешным возвращением данных из
"виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она
должна возвращать ошибку вместо данных.
3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(),
обрабатывая успешное выполнение и ошибки с использованием then() и catch().
При успешной загрузке отобразите статьи на странице. При ошибке покажите
сообщение об ошибке.
4. Добавьте функционал, который отключает кнопку загрузки на время "загрузки"
новостей и активирует её снова после завершения операции (будь то успешная
загрузка или ошибка).
*/
// const controller = new AbortController();
const triggerBtn = document.querySelector('#downloadBtn');
const resetBtn = document.querySelector('#resetBtn');
const contentEl = document.querySelector('.content');

function fetchNews() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const result = fetch('https://jsonplaceholder.org/posts', { signal: controller.signal });
      if (Math.random() > 0.5) {
        console.log('reject');
        reject('not found');
      }
      resolve([
        { title: 'news 1', content: 'content 1' },
        { title: 'news 2', content: 'content 2' },
        { title: 'news 3', content: 'content 3' },
      ]);
    }, 2000);
  });
}

/**
 *
 * @param {string} title
 * @param {string} content
 * @returns {string}
 */
const makeContent = (title, content) => {
  return `<div class="post">
<h2 class="post__title">${title}</h2>
<p class="post__text">${content}</p>
</div>`;
};

/**
 *
 * @param {Array | string} renderData
 */
const renderContent = (renderData) => {
  console.log(renderData);
  contentEl.innerHTML = '';
  if (typeof renderData === 'string') {
    contentEl.innerHTML = renderData;
    return;
  }
  renderData.forEach((data) => {
    contentEl.innerHTML += makeContent(data.title, data.content);
  });
};

// resetBtn.addEventListener('click', controller.abort);

triggerBtn.addEventListener('click', async () => {
  triggerBtn.disabled = true;
  fetchNews()
    .then((result) => {
      renderContent(result);
    })
    .catch((reason) => {
      renderContent(reason);
    })
    .finally(() => {
      triggerBtn.disabled = false;
    });
});
