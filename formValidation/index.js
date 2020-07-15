// TASK - We will create a login page, with login form
// we will set up a server to handle the login
// we will communicate with the server when the validation passes

const submitForm = e => {
  checkFormValidity(e)
}

const checkFormValidity = e => {
  const name = e.target.name
  const value = e.target.value

  switch (name) {
    case 'fname':
      value.length < 4 &&
        document
          .getElementById('first_name')
          .setCustomValidity('Your name must be more than 4 characters!')
      return
    case 'lname':
      value.length < 7 &&
        document
          .getElementById('last_name')
          .setCustomValidity('Your name must be less than 7 characters!')
      return
    case 'email':
      const emailAdd = document.getElementById('email')
      value.validity.typeMismatch &&
        emailAdd.setCustomValidity('I am expecting an e-mail address!')
      return
    default:
      console.log(' nohing here ')
  }
}

// window is ready
window.onload = () => {
  // SELECTORS
  const form = document.getElementById('register')
  const firstName = document.getElementById('first_name')
  const lastName = document.getElementById('last_name')
  const emailAdd = document.getElementById('email')
  const errorElement = document.getElementsByClassName('error')

  // EVENT LISTENERS
  form.addEventListener('submit', submitForm)
  firstName.addEventListener('blur', checkFirst)
  lastName.addEventListener('click', checkLast)
  emailAdd.addEventListener('click', checkEmail)

  // function submitForm(e) {
  //   console.log(firstName.value.length);
  //   checkFirst();
  //   checkLast();
  //   checkEmail();
  //   // e.preventDefault();
  // }

  function checkFirst() {
    if (firstName.value.length < 4) {
      firstName.setCustomValidity('Your name must be more than 4 characters!')
    } else {
      // console.log(firstName.value.length);
    }
  }

  function checkLast() {
    if (lastName.value.length > 7) {
      lastName.setCustomValidity('Your name must be less than 7 characters!')
    } else {
      console.log(lastName.value)
    }
  }

  function checkEmail() {
    if (emailAdd.validity.typeMismatch) {
      emailAdd.setCustomValidity('I am expecting an e-mail address!')
    } else {
      console.log(emailAdd.value)
    }
  }
}
