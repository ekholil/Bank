const depositField = document.getElementById('deposit-amount');
const withdrawField = document.getElementById('withdraw-amount');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const depositText = document.getElementById('deposit-show')
const withdrawText = document.getElementById('withdraw-show');
let balanceText = document.getElementById('balance');


depositBtn.addEventListener('click', function(){
    const deposit = parseFloat(depositField.value);
    const depositValue = parseFloat(depositText.innerText);
    const balanceValue = parseFloat(balanceText.innerText);
    let totalDeposit = deposit + depositValue;
    depositText.innerText = totalDeposit;
    balanceText.innerText = balanceValue + deposit;
    depositField.value = '';
})
withdrawBtn.addEventListener('click', function(){
    const withdraw = parseFloat(withdrawField.value);
    const withdrawValue = parseFloat(withdrawText.innerText);
    const totalWithdraw = withdraw + withdrawValue;
    withdrawText.innerText = totalWithdraw;
    withdrawField.value = ''
    const balanceValue = parseFloat(balanceText.innerText);
    balanceText.innerText = balanceValue - withdraw;
    
})


