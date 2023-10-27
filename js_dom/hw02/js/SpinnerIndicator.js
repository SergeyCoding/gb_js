export class SpinnerIndicator {
  #max = 0;

  constructor(spinnerBlock, max) {
    this.#max = max;
    this.spinnerBlock = spinnerBlock;
  }

  getHtmlElements() {
    const result = [];

    for (let i = 0; i < this.#max; i++) {
      const el = document.createElement('div');
      el.className = 'spinner';
      el.setAttribute;
      result.push(el);
    }
    return result;
  }

  // getHtmlElement() {
  //   const el = document.createElement('div');
  //   el.className = 'spinner';
  //   el.click=
  //   return el;
  // }

  drawInit() {
    this.spinnerBlock.append(...this.getHtmlElements());
    this.setSelected(0);
  }

  setSelected(selected) {
    for (let i = 0; i < this.spinnerBlock.children.length; i++) {
      const element = this.spinnerBlock.children[i];

      if (i === selected) {
        element.classList.add('spinner-selected');
      } else {
        element.classList.remove('spinner-selected');
      }
    }
  }
}
