function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let widthBox = 30;
  let heightBox = 30;
  let boxElement = '';
  for (let i = 0; i < amount; i++) {
    boxElement += `<div style="background-color: ${getRandomHexColor()}; width: ${widthBox}px; height: ${heightBox}px;"></div>`;
    heightBox += 10;
    widthBox += 10;
  }
  boxeDiv.insertAdjacentHTML('beforeend', boxElement);
}

function destroyBoxes() {
  boxeDiv.innerHTML = '';
}

const boxeDiv = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
const indexValue = document.querySelector('#controls input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');

buttonCreate.addEventListener('click', event => {
  destroyBoxes();
  let index = indexValue.value.trim();
  if (index >= 1 && index <= 100) {
    createBoxes(index);
  }
  index = 0;
  indexValue.value = '';
});

buttonDestroy.addEventListener('click', event => destroyBoxes());
