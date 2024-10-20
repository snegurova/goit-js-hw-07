function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesContainer = document.getElementById('boxes');
const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');

const destroyBoxes = () => (boxesContainer.innerHTML = '');

const createBoxes = amount => {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  destroyBoxes();
  boxesContainer.append(...boxes);
};

createButton.addEventListener('click', () => {
  if (input.value < 1 || input.value > 100) {
    return alert('Enter a number from 1 to 100');
  }

  createBoxes(input.value);
  input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);