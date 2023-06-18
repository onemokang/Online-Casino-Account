let userName = document.getElementById('userName');
let balance = document.getElementById('balance');
let userInputDeposit = document.getElementById('userInputDeposit');
let userInputWithdraw = document.getElementById('userInputWithdraw');
let depositInputError = document.getElementById('depositInputError');
let withdrawInputError = document.getElementById('withdrawInputError');
let depositButton = document.querySelector('div.depositButton');
let withdrawButton = document.querySelector('div.withdrawButton');
let newBalance;
let index;

// set the initial values
function initialLoad() {
    userName.innerText = "Onemo Kang";
    balance.innerText = 500;
}
initialLoad();

function displayInputError(element, message) {
    element.style.color = "red";
    element.textContent = message;
}

function deposit() {
    console.log("userinput:" + userInputDeposit.value)
    index = Math.sign(userInputDeposit.value); // Math.sign() returns 1 or -1, indicating the sign of the number passed as argument

    if (index === 1) {
        displayInputError(depositInputError, "");
        displayInputError(withdrawInputError, "");

        newBalance = +balance.innerText + +userInputDeposit.value;
        console.log('new balance: ' + newBalance)
        if (newBalance < 0){
            newBalance = 0;
        }
        balance.innerText = newBalance;
    } else if (index !== 1){
        console.log('User input error: non-positive number was entered.');
        displayInputError(depositInputError, "Error! Please enter a positive number without any special characters.");
    } else{
        displayInputError(depositInputError, "Unexpected error occured.");
    }
}

function withdraw() {
    index = Math.sign(userInputWithdraw.value);

    if (index === 1) {
        displayInputError(depositInputError, "");
        displayInputError(withdrawInputError, "");
        newBalance = balance.innerText - userInputWithdraw.value;
        console.log('new balance: ' + newBalance)

        if (newBalance < 0){
            withdrawInputError.style.color = "red"
            withdrawInputError.innerText = "Error! You cannot withdraw more than your balance! Only  $" + balance.innerText +" was successfully withdrawn. Your new balance is $0.00"
            newBalance = 0;
        }
        balance.innerText = newBalance;
    } else if (index !== 1){
        console.log('User input error: non-positive number was entered.');
        displayInputError(withdrawInputError, "Error! Please enter a positive number without any special characters.");
    } else{
        displayInputError(withdrawInputError, "Unexpected error occured.");
    }
}

document.querySelector('div.depositButton').addEventListener('click', deposit)
document.querySelector('div.withdrawButton').addEventListener('click', withdraw)

