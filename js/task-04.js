

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

//! 1t:

const valueEl = document.querySelector('span[id="value"]');
const counterValue = {
  value: 0,
  decrement() {
    if (this.value > 0) {
      return (this.value -= 1);
    }
    return console.log(`кількість не можe бути меньше 0`);
  },

  increment() {
    return (this.value += 1);
  },
};

decrementBtn.addEventListener("click", () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});

//! 2th:

// let counterValue = 0;
// decrementBtn.addEventListener('click', () => {
//     counterValue +=1;
//     document.getElementById('value').innerHTML = counterValue;
// })

// incrementBtn.addEventListener('click', () => {
//     counterValue +=1;
//     document.getElementById('value').innerHTML = counterValue;
// })

