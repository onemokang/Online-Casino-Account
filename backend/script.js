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
        document.getElementById('depositInputError').innerText = ""
        document.getElementById('withdrawInputError').innerText = ""

        newBalance = +balance.innerText + +userInputDeposit.value;
        console.log('new balance: ' + newBalance)
        if (newBalance < 0){
            newBalance = 0;
        }
        balance.innerText = newBalance;
    } else if (index !== 1){
        console.log('User input error: non-positive number was entered.');
        document.getElementById('depositInputError').style.color = "red"
        document.getElementById('depositInputError').innerText = "Error! Please enter a positive number without any special characters."
    } else{
        document.getElementById('depositInputError').style.color = "red"
        document.getElementById('depositInputError').innerText = "Unexpected error occured."
    }
}

function withdraw() {
    index = Math.sign(userInputWithdraw.value);

    if (index === 1) {
        document.getElementById('depositInputError').innerText = ""
        document.getElementById('withdrawInputError').innerText = ""
        newBalance = balance.innerText - userInputWithdraw.value;
        console.log('new balance: ' + newBalance)

        if (newBalance < 0){
            document.getElementById('withdrawInputError').style.color = "red"
            document.getElementById('withdrawInputError').innerText = "Error! You cannot withdraw more than your balance! Only  $" + balance.innerText +" was successfully withdrawn. Your new balance is $0.00"
            newBalance = 0;
        }
        balance.innerText = newBalance;
    } else if (index !== 1){
        console.log('User input error: non-positive number was entered.');
        document.getElementById('withdrawInputError').style.color = "red"
        document.getElementById('withdrawInputError').innerText = "Error! Please enter a positive number without any special characters."
    } else{
        document.getElementById('withdrawInputError').style.color = "red"
        document.getElementById('withdrawInputError').innerText = "Unexpected error occured."
    }
}

document.querySelector('div.depositButton').addEventListener('click', deposit)
document.querySelector('div.withdrawButton').addEventListener('click', withdraw)

