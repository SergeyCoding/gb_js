import { ACCESS_KEY } from './secrets.js';

await main();

async function main() {
  const img = document.querySelector('.img');
  const photograph = document.querySelector('.photograph');
  const likeBtn = document.querySelector('.likeBtn');
  const likeCounter = document.querySelector('.likeCounter');

  console.log('likeBtn', likeBtn);

  likeBtn.onclick = () => {
    console.log(likeCounter.innerText);
    likeCounter.innerText = 1 + Number(likeCounter.innerText);
  };

  await getPicture((imgUrl, photographname) => {
    console.log('photograph', photograph);
    img.src = imgUrl;
    photograph.innerText = 'имя фотографа: ' + photographname;
  });
}

function getPicture(applyData) {
  fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      applyData(data.urls.small, data.user.username);
    });
}
