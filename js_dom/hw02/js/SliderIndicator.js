export class SliderIndicator {
  #selected = 0;
  #max = 0;

  constructor(spinnerBlock, max) {
    this.#max = max;
    this.spinnerBlock = spinnerBlock;
  }

  getHtmlElements() {
    const result = [];

    for (let i = 0; i < this.#max; i++) {
      const el = document.createElement('div');
      el.className = 'slider';
      el.onclick = () => {
        this.setSelected(i);
      };
      result.push(el);
    }
    return result;
  }

  drawInit() {
    this.spinnerBlock.append(...this.getHtmlElements());
    this.setSelected(0);
  }

  setSelected(n) {
    if (n >= 0 && n < this.#max) {
      this.#selected = n;

      for (let i = 0; i < this.spinnerBlock.children.length; i++) {
        const element = this.spinnerBlock.children[i];

        if (i === n) {
          element.classList.add('slider-selected');
          const event = new Event('slider-click', { bubbles: true });
          event.sliderPoint = i;
          element.dispatchEvent(event);
        } else {
          element.classList.remove('slider-selected');
        }
      }
    }
  }

  next() {
    if (this.#selected + 1 >= this.#max) {
      this.setSelected(0);
    } else {
      this.setSelected(this.#selected + 1);
    }
  }

  prev() {
    if (this.#selected === 0) {
      this.setSelected(this.#max - 1);
    } else {
      this.setSelected(this.#selected - 1);
    }
  }

  get current() {
    return this.#selected;
  }
}
