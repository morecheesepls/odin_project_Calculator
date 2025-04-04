let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let tempNumberContainer = "";
let currentDisplayScreen = "";
const displayScreen = document.querySelector("#calcScreen");

// Event Listener for all non-operator buttons
document.querySelectorAll(".displayButton").forEach(button => {
        button.addEventListener("click", () => {
            if (result != "") {
                currentDisplayScreen = "";
                displayScreen.textContent = currentDisplayScreen;
                result = "";
                currentDisplayScreen += button.textContent;
                tempNumberContainer += button.textContent;
                displayScreen.textContent = currentDisplayScreen;
            } else if (result === "") {
                currentDisplayScreen += button.textContent;
                tempNumberContainer += button.textContent;
                displayScreen.textContent = currentDisplayScreen;
            };
        });
    });

// Event Listener for all operator buttons
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        num1 = tempNumberContainer; // Move user input from temp variable to num1  
        tempNumberContainer = ""; // Clear temp variable
        operator = button.textContent; // add operator to variable
        currentDisplayScreen = num1 + " " + operator + " " + num2; // add operator to display screen variable
        displayScreen.textContent = currentDisplayScreen; // update display screen
    })
})

// Event Listener for Equal button
document.querySelector("#equals").addEventListener("click", () => {
    num2 = tempNumberContainer; // Move user input from temp variable to num2
    tempNumberContainer = ""; // Clear temp variable
    result = operate(num1, operator, num2);
    displayScreen.textContent = result;
    num1 = "";
    num2 = "";
    operator = "";
    tempNumberContainer = "";
})

// Clear Button
document.querySelector("#clear").addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    tempNumberContainer = "";
    currentDisplayScreen = "";
    result = "";
    displayScreen.textContent = currentDisplayScreen;
});

// Individual Calculation Functions
const add = function(a, b) {
	return parseFloat(a) + parseFloat(b);
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

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operate,
};