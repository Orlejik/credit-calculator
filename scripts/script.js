const moneyAmount = document.getElementById('moneyAmount');
let monthAmount = document.getElementById('month');
let clientType = document.getElementById('typeOfCredit');
let firstPayMonth = document.getElementById('monthCredit');
let firstPayYear = document.getElementById('yearCredit');
const showCheckBox = document.getElementById('showMonthPayments');
const commision = 0.035;
let creditAmount;
let creditDetails = document.getElementById('creditDetails');

function calculateTheCredit(){
    creditAmount = parseInt(moneyAmount.value) * (clientType.value / 10 + (clientType.value / 10)/((Math.pow((1+(clientType.value / 10)), parseInt(monthAmount.value)) - 1))) + (parseInt(moneyAmount.value) * commision);
    
    console.log('total Amount money ', creditAmount);
    console.log(moneyAmount.value);
    
    console.log(clientType.value);
    console.log(firstPayMonth.value);
    console.log(firstPayYear.value);
    console.log(commision * moneyAmount.value);
  
    let monthlyPayments = document.getElementById('monthlyPayments');
    let totalCreditCost = document.getElementById('totalCreditCost');
    let lastMonth = document.getElementById('lastMonth');

    let monthPayments = (creditAmount / monthAmount.value).toFixed(2);
    let totalCreditCostValue = (creditAmount - moneyAmount.value).toFixed(2);

    monthlyPayments.innerText = monthPayments;
    totalCreditCost.innerText = totalCreditCostValue; 

    console.log(lastMonth);
    creditDetails.style = 'display: block;'

}

// сделать табличку где заполняются выплаты по кредиту
// так же с помощью цикла сделать выведение таблицы по чекбоксу

