function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector("button.change-color");
changeColorBtn.addEventListener("click", changeColor);

const body = document.querySelector("body");
const colorOutput = document.querySelector("span.color");

function changeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorOutput.textContent = randomColor;
}
