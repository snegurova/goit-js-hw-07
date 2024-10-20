function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorElement = document.querySelector('.color');

const changeColor = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorElement.textContent = color;
};

button.addEventListener('click', changeColor);