import { Slider } from './Slider.js';
import { SpinnerIndicator } from './SpinnerIndicator.js';

const pictures = ['pic_01.avif', 'pic_02.avif', 'pic_03.avif'];

const slider = new Slider(pictures.length);
const indicator = new SpinnerIndicator(pictures.length);

const img = document.querySelector('.container img');

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const spinnerBlock = document.querySelector('.spinner-block');

// spinnerBlock.insertAdjacentElement('beforeend', indicator.getHtmlElement());
spinnerBlock.append(...indicator.getHtmlElements());

prevBtn.onclick = () => {
  slider.prev();
  img.src = './img/' + pictures[slider.current];
};
nextBtn.onclick = () => {
  slider.next();
  img.src = './img/' + pictures[slider.current];
};
