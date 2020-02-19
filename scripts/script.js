// сумма кредита -  80 000 гр 
// срок - 2 года.
// процент - 24 %
// Комиссия – 1 % от суммы.
// П = 80 000 * 24 / 100 * 730 / 365 + 80 000 * 0, 01 * 24 = 57600 грн.
// То есть в итоге Сергею придется выплатить 137 600 гривен.
const moneyAmount = document.getElementById('moneyAmount').value;
const monthAmount = document.getElementById('month');
const clientType = document.getElementById('typeOfCredit').value;
const firstPayMonth = document.getElementById('monthCredit').value;
const firstPayYear = document.getElementById('yearCredit').value;
const showCheckBox = document.getElementById('showMonthPayments');

monthValue = (function getMonthValue(x){
    var x = +monthAmount.value;
    console.log(x)
    return x;
})();




