const form = document.querySelector('.login-form');

// form.addEventListener ('submit', (event) => {
//   event.preventDefault();
  
//   const {
//     elements: { email, password }
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Email: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// })


//! OR:


form.addEventListener ('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (formData.get('email') === "" || formData.get('password') === "") {
      return console.log("Please fill in all the fields!");}

    console.log(`Email: ${formData.get('email')}, Password: ${formData.get('password')}`);  
    
    event.currentTarget.reset();
  })







