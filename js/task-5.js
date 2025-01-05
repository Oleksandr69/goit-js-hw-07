function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

changeColor.addEventListener('click', () => {
  const colorBack = getRandomHexColor();
  color.textContent = colorBack;
  bodyColor.style.backgroundColor = colorBack;
});
