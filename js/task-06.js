const validationEl = document.querySelector('[id="validation-input"]');

validationEl.addEventListener("blur", onColorBlur);

function onColorBlur (event) {
 validationEl.value.length === Number(validationEl.getAttribute("data-length"))
  ? validationEl.style.borderColor = 'rgb(76, 175, 80)' 
  : validationEl.style.borderColor = '#f44336' 
}


//!OR

// document.querySelector('[id="validation-input"]').onblur = function() {
//   if (this.getAttribute('data-length') > this.value.length) { 
//     this.classList.remove('valid');
//     this.classList.add('invalid');
//   } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   }
// };



