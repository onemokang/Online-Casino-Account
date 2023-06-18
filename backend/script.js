let userName = document.getElementById('userName');
let balance = document.getElementById('balance');
let userInput = document.getElementById('userInput');
let newBalance;
let index;

// set the initial values
function initialLoad() {
    userName.innerText = "Onemo Kang";
    balance.innerText = 500;
}
initialLoad();

function deposit() {
    console.log("userinput:" + userInput.value)
    index = Math.sign(userInput.value); // Math.sign() returns 1 or -1, indicating the sign of the number passed as argument

    if (index === 1) {
        newBalance = +balance.innerText + +userInput.value;
        console.log('new balance: ' + newBalance)

        if (newBalance < 0){
            newBalance = 0;
        }
        balance.innerText = newBalance;
    } else {
        console.log('user input error: non-positive number was entered.')
    } 
}

function cashout() {
    userInput = 100;
    index = Math.sign(userInput); // Math.sign() returns 1 or -1, indicating the sign of the number passed as argument

    if (index === 1) {
        newBalance = balance.innerText - userInput;
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
document.querySelector('div.cashoutButton').addEventListener('click', cashout)

