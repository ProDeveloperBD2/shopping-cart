


/* Button Plus Complete Start */
document.getElementById('btn-case-plus').addEventListener('click', function () {

    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;

    /*  Red Cut Start */
    const caseRed = document.getElementById('case-red');

    const newAddRed = newCaseNumber * 59;
    caseRed.innerText = newAddRed;
    /*  Red Cut End */
    calculateSubtotal()

    taxTotal()
})
/* Button Plus Complete End */



/* Button Minus Complete Start */
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber1 = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber1;

    /*  Red Add Start */
    const caseRed = document.getElementById('case-red');

    const newAddRed1 = newCaseNumber1 * 59;
    caseRed.innerText = newAddRed1;
    /*  Red Add End */
    calculateSubtotal()

    taxTotal()
    minusOf('btn-case-minus')
})