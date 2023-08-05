


/* Button Plus Complete Start */
document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;


    /*  Red Add Start */
    const phoneRed = document.getElementById('phone-red');

    const newAddRed = newPhoneNumber * 1219;
    phoneRed.innerText = newAddRed;
    /*  Red Add End */
    calculateSubtotal()

    taxTotal()
})
/* Button Plus Complete End */



/* Button Minus Complete Start */
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber1 = previousPhoneNumber - 1;
    phoneNumberField.value = newPhoneNumber1;

    /*  Red Cut Start */
    const phoneRed = document.getElementById('phone-red');

    const newAddRed1 = newPhoneNumber1 * 1219;
    phoneRed.innerText = newAddRed1;
    /*  Red Cut End */
    calculateSubtotal()

    taxTotal()

    const minusNumberField = document.getElementById('phone-number-field');
    if (minusNumberField <= 0) {

        document.getElementById('btn-phone-minus').style.display = 'none'
    }
})