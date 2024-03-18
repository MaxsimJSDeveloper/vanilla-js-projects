import { getRandomHexColor } from './getRandomHexColor';

const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  span.innerText = color;
  console.log(color);
}
