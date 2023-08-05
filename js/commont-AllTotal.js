/* subtotal plus and minus start */
function totalSub(elementId) {
    const currentCaseTotal = document.getElementById(elementId)
    const caseRedTotalString = currentCaseTotal.innerText;
    const caseRedTotal = parseInt(caseRedTotalString);
    return caseRedTotal;
}
function totalSub1(elementId1) {
    const phoneReds = document.getElementById(elementId1);
    const phoneAmountString = phoneReds.innerText;
    const phoneAmount = parseInt(phoneAmountString);
    return phoneAmount;
}

function calculateSubtotal() {

    const phoneSubRed = totalSub1('phone-red');
    const currenSubtotals = totalSub('case-red');

    const currenSubtotal = phoneSubRed + currenSubtotals;
    const subtotalElement = document.getElementById('subtotal');
    subtotalElement.innerText = currenSubtotal;

    const finalElement = document.getElementById('final');
    finalElement.innerText = currenSubtotal;
    /* calculate tax start */

    /* calculate tax end */
}
/* subtotal plus and minus start */

function taxTotal() {
    const phoneSubRed = totalSub1('phone-red');
    const currenSubtotals = totalSub('case-red');

    const currenSubtotal = phoneSubRed + currenSubtotals;

    const taxAmount = currenSubtotal * 0.1;


    const taxElements = document.getElementById('tax');
    taxElements.innerText = taxAmount;
}

function minusOf(fieldId) {
    const minusNumberField = document.getElementById(fieldId);
    if (minusNumberField < 1) {
        document.getElementById("btn-case-minus").disabled = true;
    }
}