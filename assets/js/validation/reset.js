const reset = document.getElementById('reset')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

reset.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});


function checkInputs() {
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()


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
