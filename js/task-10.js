const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divBoxes: document.getElementById("boxes"),
};

refs.createBtn.addEventListener("click", getAmount);

refs.destroyBtn.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = +document.querySelector("input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const startSize = 30;
  let fragm = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    let size = startSize + i * 10;
    divEl.style.width = size + "px";
    divEl.style.height = size + "px";
    divEl.style.backgroundColor = getRandomHexColor();

    fragm.appendChild(divEl);
  }

  refs.divBoxes.appendChild(fragm);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
}
