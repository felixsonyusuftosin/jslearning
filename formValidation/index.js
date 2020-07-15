// SELECTORS
const form = document.getElementById("register");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const emailAdd = document.getElementById("email");
const errorElement = document.getElementsByClassName("error");
// EVENT LISTENERS
form.addEventListener("click", submitForm);
firstName.addEventListener("blur", checkFirst);
lastName.addEventListener("click", checkLast);
emailAdd.addEventListener("click", checkEmail);
// FUNCTION
function submitForm(e) {
  console.log(firstName.value.length);
  checkFirst();
  checkLast();
  checkEmail();
  // e.preventDefault();
}

function checkFirst() {
  if (firstName.value.length < 4) {
    firstName.setCustomValidity("Your name must be more than 4 characters!");
  } else {
    // console.log(firstName.value.length);
  }
}

function checkLast() {
  if (lastName.value.length > 7) {
    lastName.setCustomValidity("Your name must be less than 7 characters!");
  } else {
    console.log(lastName.value);
  }
}

function checkEmail() {
  if (emailAdd.validity.typeMismatch) {
    emailAdd.setCustomValidity("I am expecting an e-mail address!");
  } else {
    console.log(emailAdd.value);
  }
}
