let form = document.querySelector('form');
let submit = document.querySelector('#submit');

const userInfo = {
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
    passwordConfirm: "",
}

let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let email = document.querySelector('#email');
let birthDate = document.querySelector('#birthDate');
let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#passwordConfirm');
let terms = document.querySelector('#terms');

let validationMessage = document.querySelectorAll('.validation-message');
let firstNameMessage = document.getElementById('validation-message1');
let lastNameMessage = document.getElementById('validation-message2');

function validateInput(input) {
  if (!input.value) {
    console.log(input.name, "should not be empty");
    return;
  }
}

function register(e) {
  e.preventDefault();
  let credentials = [
    firstName,
    lastName,
    email,
    birthDate,
    password,
    passwordConfirm,
  ];

  credentials.forEach((creds) => {
    validateInput(creds);
  });
  console.log(
    "Password: ",
    password.value.length,
    "Confirm Password: ",
    passwordConfirm.value.length
  );

  if (password.value.length < 8) {
    console.log("Password should be longer than 8 characters");
    return;
  } else {
    if (password.value === passwordConfirm.value) {
      form.submit();
    } else {
      console.log("Passwords do not match");
    }
  }
}

function createErrorMessage(name, message, parent) {
  let error = document.createElement("span");
  error.classList.add("error");
  error.innerHTML = `${name} ${message}`;
  parent.appendChild(error);
}
