export class SpinnerIndicator {
  #max = 0;
  constructor(max) {
    this.#max = max;
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

  getHtmlElement() {
    const el = document.createElement('div');
    el.className = 'spinner';
    return el;
  }
}
