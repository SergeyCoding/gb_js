import { Slider } from './Slider.js';
import { SpinnerIndicator } from './SpinnerIndicator.js';

const pictures = ['pic_01.avif', 'pic_02.avif', 'pic_03.avif'];

const slider = new Slider(pictures.length);

const img = document.querySelector('.container img');

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const spinnerBlock = document.querySelector('.spinner-block');

const indicator = new SpinnerIndicator(spinnerBlock, pictures.length);
indicator.drawInit();

prevBtn.onclick = () => {
  slider.prev();
  changePicture(slider.current);
  indicator.setSelected(slider.current);
};

nextBtn.onclick = () => {
  slider.next();
  changePicture(slider.current);
  indicator.setSelected(slider.current);
};

document.addEventListener('spinner-click', (e) => {
  slider.current = e.spinnerPoint;
  changePicture(slider.current);
});

function changePicture(n) {
  img.src = './img/' + pictures[n];
}
