const otpform = document.getElementById('otpForm')
const otp = document.getElementById('otp')

otpform.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});


function checkInputs() {
    const otpValue = otp.value.trim()

    //Email field
    if(otpValue === ''){
        setErrorFor(otp, 'Please enter your OTP');
    } else if(!isOTP(otpValue)){
        setErrorFor(otp, 'OTP is not a valid')
    } else {
        setSuccessFor(otp)
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
function isOTP(otp) {
    return /^\d{6}$/.test(otp);
}

