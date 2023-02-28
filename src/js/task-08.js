const form = document.querySelector('.login-form');

form.addEventListener ('submit', (event) => {
  event.preventDefault();
  
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
})

//!OR

// form.addEventListener ('submit', (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     const emailEl = form.querySelector('input[name="email"]');
//     const passwordEl = form.querySelector('input[name="password"]');

//     formData.set(emailEl);
//     formData.set(passwordEl);

  
//     if (emailEl === "" || passwordEl === "") {
//       return console.log("Please fill in all the fields!");
//     }
  
//     console.log(`Email: ${emailEl}, Password: ${passwordEl}`);
//     event.currentTarget.reset();
//   })


