const validationEl = document.querySelector('[id="validation-input"]');


validationEl.addEventListener("blur", () => {

  validationEl.value.length === Number(validationEl.getAttribute("data-length"))
  ? validationEl.style.borderColor = 'rgb(76, 175, 80)' 
  : validationEl.style.borderColor = '#f44336'
});
