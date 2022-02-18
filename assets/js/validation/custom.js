const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phonenumber = document.getElementById('phonenumber')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});


function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const phonenumberValue = phonenumber.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()

    // Check username field
    if(usernameValue === ''){
        setErrorFor(username, 'Please enter a username');
    } else {
        setSuccessFor(username)
    }

    //Email field
    if(emailValue === ''){
        setErrorFor(email, 'Please enter an email');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not a valid')
    } else {
        setSuccessFor(email)
    }

    //Phone field
    if(phonenumberValue === ''){
        setErrorFor(phonenumber, 'Please enter a phone number');
    } else if(!isPhone(phonenumberValue)){
        setErrorFor(phonenumber, 'Phone number is not a valid')
    } else {
        setSuccessFor(phonenumber)
    }

    // Check password field
    if(passwordValue === ''){
        setErrorFor(password, 'Please enter a password');
    } else if(!isPassword(passwordValue)){
        setErrorFor(password, 'Password should be 6 characters long, with at least 1 numerical value, 1 uppercase letter.')
    } else {
        setSuccessFor(password)
    }

    // Check confirm password field
    if(confirmPasswordValue === ''){
        setErrorFor(confirmPassword, 'Please re-enter a password');
    } else if(confirmPasswordValue !== passwordValue){
        setErrorFor(confirmPassword, 'Passwords do not match.')
    } else {
        setSuccessFor(confirmPassword)
    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    // Add error class
    formControl.className = 'input-div error';
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-div success';
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPhone(phonenumber) {
    return /^\+\d{6,20}$/.test(phonenumber)
}
function isPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,100}$/.test(password)
}


