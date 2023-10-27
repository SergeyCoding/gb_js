export class Slider {
  #selected = 0;
  #max = 0;

  constructor(max) {
    this.#max = max;
  }

  next() {
    if (this.#selected + 1 >= this.#max) {
      this.#selected = 0;
    } else {
      this.#selected++;
    }
  }

  prev() {
    if (this.#selected === 0) {
      this.#selected = this.#max - 1;
    } else {
      this.#selected--;
    }
  }

  get current() {
    return this.#selected;
  }
}
