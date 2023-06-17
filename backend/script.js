let userName = document.getElementById('userName');
let balance = document.getElementById('balance');
let newBalance;
let userInput = document.getElementById('userInput');
// Math.sign() returns 1 or -1, indicating the sign of the number passed as argument
let index = Math.sign(userInput);

// set the initial values
function initialLoad() {
    userName.innerText = "Onemo Kang";
    balance.innerText = 500;
}
initialLoad();

function cashout() {
    userInput = 10;

    if (true) {
        newBalance = balance.innerText - userInput;
        console.log('new balance: ' + newBalance)
        balance.innerText = newBalance;
    } else {
        console.log('user input error - non-positive number was entered.')
    }
}

document.querySelector('div.cashoutButton').addEventListener('click', cashout)
