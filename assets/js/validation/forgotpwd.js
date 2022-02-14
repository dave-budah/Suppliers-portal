const forgotpwd = document.getElementById('forgotpwd')
const email = document.getElementById('email')

forgotpwd.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});


function checkInputs() {
    const emailValue = email.value.trim()

    //Email field
    if(emailValue === ''){
        setErrorFor(email, 'Please enter an email');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not a valid')
    } else {
        setSuccessFor(email)
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
