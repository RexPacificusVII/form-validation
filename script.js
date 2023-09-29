const form = document.querySelector('#registration-form');
const submitButton = document.querySelector('#submitButton');
const resetButton = document.querySelector('#resetButton')

const userInfo = {
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
    passwordConfirm: "",
}

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const birthDate = document.querySelector('#birthDate');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const terms = document.querySelector('#terms');

const firstNameMessage = document.getElementById('firstNameMessage');
const lastNameMessage = document.getElementById('lastNameMessage');
const emailMessage = document.getElementById('emailMessage');
const birthDateMessage = document.getElementById('birthDateMessage');
const passwordMessage = document.getElementById('passwordMessage');
const passwordConfirmMessage = document.getElementById('passwordConfirmMessage');
const termsMessage = document.getElementById('termsMessage');

function register(e) {

    e.preventDefault();

    firstName_Verify();
    lastName_Verify();
    email_Verify();
    birthDate_Verify();
    password_Verify();
    passwordConfirm_Verify();
    terms_Verify();
}


firstName.addEventListener('input', firstName_Verify)
function firstName_Verify() {
    if (!firstName.value) {
        document.getElementById('firstNameMessage').innerHTML = '<small class="mb-3">Please enter your first name.</small>';
        firstNameMessage.classList.remove('invisible');
        return true;
    } else {
        firstNameMessage.classList.add('invisible');
    }
}

lastName.addEventListener('input', lastName_Verify)
function lastName_Verify() {
    if (!lastName.value) {
        document.getElementById('lastNameMessage').innerHTML = '<small class="mb-3">Please enter your last name.</small>';
        lastNameMessage.classList.remove('invisible');
        return true;
    } else {
        lastNameMessage.classList.add('invisible');
    }
}

email.addEventListener('input', email_Verify)
function email_Verify() {
    if (!email.value) {
        document.getElementById('emailMessage').innerHTML = '<small class="mb-3">Please enter a valid email address.</small>';
        emailMessage.classList.remove('invisible');
        return true;
    } else {
        emailMessage.classList.add('invisible');
    }
}

birthDate.addEventListener('input', birthDate_Verify)
function birthDate_Verify() {
    if (!birthDate.value) {
        document.getElementById('birthDateMessage').innerHTML = '<small class="mb-3">Enter your date of birth.</small>';
        birthDateMessage.classList.remove('invisible');
        return true;
    } else {
        birthDateMessage.classList.add('invisible');
    }
}

password.addEventListener('input', password_Verify);
function password_Verify() {
    if (!password.value ) {
        document.getElementById('passwordMessage').innerHTML = '<small class="mb-3">Create a unique password (min. 8 characters).</small>';
        passwordMessage.classList.remove('invisible');
        return true;
    } else if (password.value.length < 8) {
        document.getElementById('passwordMessage').innerHTML = '<small class="mb-3">Passwords must be at least 8 characters long.</small>';
    } else {
        passwordMessage.classList.add('invisible');
    }
}

passwordConfirm.addEventListener('input', passwordConfirm_Verify)
function passwordConfirm_Verify() {
    if (!passwordConfirm.value) {
        document.getElementById('passwordConfirmMessage').innerHTML = '<small class="mb-3">Please confirm your password.</small>';
        passwordConfirmMessage.classList.remove('invisible');
        return true;
    } else if (passwordConfirm.value !== password.value) { 
        document.getElementById('passwordConfirmMessage').innerHTML = '<small class="mb-3">Passwords do not match.</small>';
    } else {
        passwordConfirmMessage.classList.add('invisible');
    }
}

terms.addEventListener('input', terms_Verify)
function terms_Verify() {
    if (!terms.checked) {
        document.getElementById('termsMessage').innerHTML = '<small class="mb-3">You must agree before submitting.</small>';
        termsMessage.classList.remove('invisible');
        return true;
    } else {
        termsMessage.classList.add('invisible');
    }
}

function reset() {
    preventDefault();
    form.reset();
}