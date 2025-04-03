let num1 = "";
let num2 = "";
let operator = "";
const displayScreen = document.querySelector("#calcScreen");
let currentDisplayScreen = "";

// Event Listener for all Buttons
const buttonPress = document.querySelectorAll(".displayButton").forEach(button => {
        button.addEventListener("click", () => {
            currentDisplayScreen += button.textContent;
            displayScreen.textContent = currentDisplayScreen;
        });
    });

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