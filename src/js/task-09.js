
const span = document.querySelector('.color');
const btn = document.querySelector('.change-color')
const body = document.querySelector('body')



btn.addEventListener('click', onRandomColor) 

function onRandomColor() {
span.textContent = getRandomHexColor();
body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


