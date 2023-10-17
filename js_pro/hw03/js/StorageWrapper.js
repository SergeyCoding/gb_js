class StorageWrapper {
  static #IS_TESTING = true;
  static #GOODS = 'goods';

  #localData = new Map();

  constructor() {
    this.#init();
  }

  #init() {
    if (StorageWrapper.#IS_TESTING) {
      localStorage.clear();

      if (localStorage.getItem(StorageWrapper.#GOODS) === null) {
        localStorage.setItem(StorageWrapper.#GOODS, JSON.stringify({ data: initialData() }));
      }
    }

    this.#loadData();
    console.log(this.#localData);
  }

  #loadData() {
    const d = JSON.parse(localStorage.getItem(StorageWrapper.#GOODS)).data;

    if (Array.isArray(d)) {
      d.forEach((element) => {
        this.#localData.set(element.product, new Map(element.reviews.map((x) => [x.id, x.text])));
      });
    }
  }

  #saveData() {
    return JSON.parse(localStorage.getItem(StorageWrapper.#GOODS)).data;
  }

  getGoods() {
    return this.#localData.keys;
  }

  getReviews(goods) {
    if (this.#localData.has(goods)) {
      return this.#localData.get(goods);
    }
    return new Map();
  }

  setReview(goods, text) {
    let id = 0;

    if (this.#localData.has(goods)) {
      id = this.#localData.get(goods).max(x.id) ?? 0;
    } else {
      this.#localData.set(goods, []);
    }

    this.#localData.get(goods).push({ id: id + 1, text });

    this.#saveData();
  }

  removeReview(goods, id) {
    const g = this.getData().find((x) => x.product === goods);
    if (g) {
      return g.review.find((x) => x.id === id);
    }

    this.#saveData();
  }
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
