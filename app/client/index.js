window.onload = () => {
  const form = document.getElementById('form')
  const firstName = document.getElementById('fname')
  const lastName = document.getElementById('lname')
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const submit = document.getElementById('submit')

 function checkIfFormIsValid(e) {
    const element = e.target
    const name = element.name
    const value = element.value
    
    // test the name 
    switch (name) {
      case 'first_name':
        value.length < 4 &&
          firstName.setCustomValidity(' First name must be more than 4 letters')
        value.length >= 4 && firstName.setCustomValidity('')
        return
      case 'last_name':
        value.length < 7 &&
          lastName.setCustomValidity(' last name must be more than 7 letters')
        value.length >= 7 && lastName.setCustomValidity('')
        return
      case 'email':
        email.validity.typeMismatch &&
          email.setCustomValidity('Email is not valid ')
        !email.validity.typeMismatch && email.setCustomValidity('')
        return
      case 'password':
        const regExp = new RegExp('^(?=.*\d).{4,8}$')
        const matchPattern = regExp.test(value)
        console.log( matchPattern)
        !matchPattern &&
          password.setCustomValidity(
            'Password expression. Password must be between 4 and 8 digits long and include at least one numeric digit.'
          )
        matchPattern && password.setCustomValidity('')
        return
      default:
        value.length < 1 && element.setCustomValidity('something unexpexted happened please fill the form again')
        value.length > 0 &&  element.setCustomValidity('')
    }
  }
  // we will attach events to submit 
  submit.addEventListener('click', e => {
    const formIsValid = form.checkValidity()
    if(formIsValid) { 
       alert(' form is valid')
    }
 
  })
   
  // attach listenets and use keyup events which calls after every keystroke press
  firstName.addEventListener('keyup', checkIfFormIsValid)
  lastName.addEventListener('keyup', checkIfFormIsValid)
  email.addEventListener('keyup', checkIfFormIsValid)
  password.addEventListener('keyup', checkIfFormIsValid)
}


// function loadDoc() {

//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//      if (this.readyState == 4 && this.status == 200) {
//        document.getElementById("demo").innerHTML = this.responseText;
//       }
//     };

//   xhttp.open("POST", "cookies.php", true);
//   xhttp.send();
// }