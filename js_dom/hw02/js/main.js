import { SliderIndicator } from './SliderIndicator.js';

const pictures = ['pic_01.avif', 'pic_02.avif', 'pic_03.avif'];

const img = document.querySelector('.container img');

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const sliderBlock = document.querySelector('.slider-block');

const indicator = new SliderIndicator(sliderBlock, pictures.length);
indicator.drawInit();

prevBtn.onclick = () => {
  indicator.prev();
};

nextBtn.onclick = () => {
  indicator.next();
};

document.addEventListener('slider-click', (e) => {
  img.src = './img/' + pictures[e.sliderPoint];
});

setInterval(() => {
  indicator.next();
}, 3000);
