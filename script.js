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
        });
    });

// Event Listener for all operator buttons
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        num1 = tempNumberContainer; // Move user input from temp variable to num1  
        tempNumberContainer = ""; // Clear temp variable
        console.log(operator = button.textContent); // add operator to variable
        currentDisplayScreen += operator; // add operator to display screen variable
        displayScreen.textContent = currentDisplayScreen; // update display screen
    })
})

// Clear Button
document.querySelector("#clear").addEventListener("click", () => {
    currentDisplayScreen = "";
    displayScreen.textContent = currentDisplayScreen;
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