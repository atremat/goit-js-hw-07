function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("div#boxes");

function createBoxes(amount) {
  destroyBoxes();
  let markup = "";

  for (let i = 0, j = 30; i < amount; i += 1, j += 10) {
    markup += `
    <div style="background: ${getRandomHexColor()};
    width:${j}px;height:${j}px;">
    </div>
    `;
  }
  boxes.insertAdjacentHTML("afterbegin", markup);
  boxes.style.display = "flex";
  boxes.style.gap = "16px";
  boxes.style.flexWrap = "wrap";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", (event) => {
  const numOfBoxes = inputNum.value;

  if (numOfBoxes < 1 || numOfBoxes > 100) return;
  createBoxes(numOfBoxes);
});

destroyBtn.addEventListener("click", destroyBoxes);
