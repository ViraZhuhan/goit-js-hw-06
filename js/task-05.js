
  const refs = {
  input: document.querySelector('[id="name-input"]'),
  output: document.querySelector('[id="name-output"]'),
  }

  refs.input.addEventListener('input', onInputChange);

  function onInputChange (event) {
    refs.output.textContent = event.currentTarget.value;
  }