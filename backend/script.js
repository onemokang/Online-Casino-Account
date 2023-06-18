let userName = document.getElementById('userName');
let balance = document.getElementById('balance');
let userInputDeposit = document.getElementById('userInputDeposit');
let userInputWithdraw = document.getElementById('userInputWithdraw');
let newBalance;
let index;

// set the initial values
function initialLoad() {
    userName.innerText = "Onemo Kang";
    balance.innerText = 500;
}
initialLoad();

function deposit() {
    console.log("userinput:" + userInputDeposit.value)
    index = Math.sign(userInputDeposit.value); // Math.sign() returns 1 or -1, indicating the sign of the number passed as argument

    if (index === 1) {
        newBalance = +balance.innerText + +userInputDeposit.value;
        console.log('new balance: ' + newBalance)
        if (newBalance < 0){
            newBalance = 0;
        }
        balance.innerText = newBalance;
    } else {
        console.log('user input error: non-positive number was entered.')
    } 
}

function withdraw() {
    index = Math.sign(userInputWithdraw.value);

    if (index === 1) {
        newBalance = balance.innerText - userInputWithdraw.value;
        console.log('new balance: ' + newBalance)

        if (newBalance < 0){
            newBalance = 0;
        }
        balance.innerText = newBalance;
    } else {
        console.log('user input error: non-positive number was entered.')
    }
}

document.querySelector('div.depositButton').addEventListener('click', deposit)
document.querySelector('div.withdrawButton').addEventListener('click', withdraw)

