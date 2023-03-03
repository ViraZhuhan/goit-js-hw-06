const rangeEl = document.querySelector('[id="font-size-control"]');
const text = document.querySelector('[id="text"]');

rangeEl.addEventListener("input", onInputFontsize);

function onInputFontsize (event) {
    text.style.fontSize = event.currentTarget.value + 'px';
}

