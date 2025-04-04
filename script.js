let num1 = "";
let num2 = "";
let operator = "";
const displayScreen = document.querySelector("#calcScreen");
let tempNumberContainer = ""
let currentDisplayScreen = "";

// Event Listener for all non-operator buttons
document.querySelectorAll(".displayButton").forEach(button => {
        button.addEventListener("click", () => {
            currentDisplayScreen += button.textContent;
            tempNumberContainer += button.textContent;
            displayScreen.textContent = currentDisplayScreen;
            console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | op is ${operator} | num2 is ${num2}`);
        });
    });

// Event Listener for all operator buttons
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        num1 = tempNumberContainer; // Move user input from temp variable to num1  
        tempNumberContainer = ""; // Clear temp variable
        operator = button.textContent; // add operator to variable
        currentDisplayScreen += operator; // add operator to display screen variable
        displayScreen.textContent = currentDisplayScreen; // update display screen
        console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | op is ${operator} | num2 is ${num2}`);
    })
})

// Event Listener for Equal button
document.querySelector("#equals").addEventListener("click", () => {
    num2 = tempNumberContainer; // Move user input from temp variable to num2
    tempNumberContainer = ""; // Clear temp variable
    currentDisplayScreen = operate(num1, operator, num2);
    displayScreen.textContent = currentDisplayScreen;
    console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | op is ${operator} | num2 is ${num2}`);
    num1 = "";
    num2 = "";
    operator = "";
    console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | op is ${operator} | num2 is ${num2}`);
})

// Clear Button
document.querySelector("#clear").addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    tempNumberContainer = "";
    currentDisplayScreen = "";
    displayScreen.textContent = currentDisplayScreen;
    console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | op is ${operator} | num2 is ${num2}`);
});

// Individual Calculation Functions
const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const multiply = function(a, b) {
    return a*b;
};

const divide = function(a, b) {
    return a/b;
};

// Take an operator and two numbers, then call one of the calculation functions.
function operate(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2);
    };
};

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide,
//     operate,
// };