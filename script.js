let num1;
let num2;
let operator;
let displayScreen;

// Event Listener for all Buttons
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", () => {
            console.log("CLICK TEST!");
        });
    });
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

console.log(operate(num1, operator, num2));

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide,
//     operate,
// };