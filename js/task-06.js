function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(element) {
  const boxSize = 30;
  const elements = [];
boxes.innerHTML = '';

  for (let i = 0; i < element; i++) {
    const box = document.createElement('div');
    const size = boxSize + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    elements.push(box);
  }
  boxes.append(...elements);
}

createBtn.addEventListener('click', () => {
    const element = Number(input.value);
  if (element >= 1 && element <= 100) {
    createBoxes(element);

  } 
  input.value = '';
 
 
}
);

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
}
);


