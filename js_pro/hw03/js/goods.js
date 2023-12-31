'use strict';

class GoodsManager {
  constructor() {}

  getGoods() {
    try {
      return JSON.parse(localStorage.getItem('goods')).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  setGoods(goods) {
    return localStorage.setItem('goods', JSON.stringify({ data: goods }));
  }
}

class ReviewManager {
  constructor(goods) {
    this.goods = goods;
  }

  getReviews() {
    try {
      return JSON.parse(localStorage.getItem(`goods{${this.goods}}`)).data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  setReviews(reviews) {
    return localStorage.setItem(`goods{${this.goods}}`, JSON.stringify({ data: reviews }));
  }
  removeReviews(reviews) {
    const arrReviews = this.getReviews();

    const index = arrReviews.indexOf(reviews);
    if (index > -1) {
      arrReviews.splice(index, 1);
    }

    this.setReviews(arrReviews);
  }
}

const selectGoods = document.querySelector('#selectGoodsId');
const currentProduct = document.querySelector('#currentProductId');
const currentReview = document.querySelector('#currentReviewId');
const addButton = document.querySelector('#addButtonId');
const showReview = document.querySelector('#showReviewId');

const gs = new GoodsManager();
// console.log(gs.getGoods());

if (gs.getGoods().length === 0) {
  gs.setGoods(initialData().map((x) => x.product));
  // console.log('init', gs.getGoods());

  for (const item of gs.getGoods()) {
    const rs = new ReviewManager(item);
    // console.log(initialData().find((x) => x.product === item));
    rs.setReviews(
      initialData()
        .find((x) => x.product === item)
        .reviews.map((x) => x.text)
    );
  }
}

gs.getGoods().forEach((x) => {
  const option = document.createElement('option');
  option.innerText = x;
  selectGoods.appendChild(option);
});

selectGoods.addEventListener('change', (e) => {
  if (currentProduct) {
    currentProduct.value = e.target.value;
  }
});

addButton?.addEventListener('click', () => {
  const set = new Set(gs.getGoods());

  if (!set.has(currentProduct.value)) {
    set.add(currentProduct.value);
    gs.setGoods(Array.from(set));
    // console.log(gs.getGoods());
  }

  // console.log('currentReview', currentReview.value);
  const rs = new ReviewManager(currentProduct.value);
  const setReviews = new Set(rs.getReviews());
  setReviews.add(currentReview.value);
  rs.setReviews(Array.from(setReviews));
  // console.log(rs.getReviews());
});

showReview?.addEventListener('click', () => {
  document.querySelector('.review-container').innerText = '';

  const rs = new ReviewManager(selectGoods.value);

  if (rs.getReviews().length === 0) {
    document.querySelector('.review-container').innerText = 'Отзывов нет';
    return;
  }

  for (const item of rs.getReviews()) {
    const newDiv = document.createElement('div');
    newDiv.style = { ...newDiv.style, display: 'flex', alignItems: 'center' };
    newDiv.innerHTML = `<p>${item}</p><button class="rmBtn">удалить</button>`;

    document.querySelector('.review-container').append(newDiv);
  }

  document.querySelectorAll('.rmBtn').forEach((x) => {
    x.addEventListener('click', rm);
  });
});

function rm(e) {
  // console.log(e);
  // console.log(e.target.parentNode.childNodes[0].innerText);
  const rs = new ReviewManager(selectGoods.value);
  rs.removeReviews(e.target.parentNode.childNodes[0].innerText);
  // console.log(rs.getReviews());
  // e.target.parentNode.remove();
  showReview.click();
}

function initialData() {
  return [
    {
      product: 'Apple iPhone 13',
      reviews: [
        {
          id: 1,
          text: 'Отличный телефон! Батарея держится долго.',
        },
        {
          id: 2,
          text: 'Камера супер, фото выглядят просто потрясающе.',
        },
      ],
    },
    {
      product: 'Samsung Galaxy Z Fold 3',
      reviews: [
        {
          id: 3,
          text: 'Интересный дизайн, но дорогой.',
        },
      ],
    },
    {
      product: 'Sony PlayStation 5',
      reviews: [
        {
          id: 4,
          text: 'Люблю играть на PS5, графика на высоте.',
        },
      ],
    },
  ];
}
