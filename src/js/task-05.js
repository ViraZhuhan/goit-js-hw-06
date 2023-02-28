const textInput = document.querySelector('[id="name-input"]');
const textOutput = document.querySelector('[id="name-output"]');

textInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value;
  });


//! OR

  // const refs = {
  // input: document.querySelector('[id="name-input"]'),
  // output: document.querySelector('[id="name-output"]'),
  // }

  // refs.input.addEventListener('input', onInputChange);

  // function onInputChange (event) {
  //   refs.output.textContent = event.currentTarget.value;
  // }