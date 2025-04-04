let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let tempNumberContainer = "";
let currentDisplayScreen = "";
const displayScreen = document.querySelector("#calcScreen");
const updateDisplayScreen = () => displayScreen.textContent = currentDisplayScreen;

// Number Button Functionality
document.querySelectorAll(".displayButton").forEach(button => {
        button.addEventListener("click", () => {
            if (result === "") { // 1st Calculation
                currentDisplayScreen += button.textContent;
                tempNumberContainer += button.textContent;
                updateDisplayScreen();
                console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
            } else if (result !== "") { // Operator was pressed instead of equal e.g. (2 + 3 + )
                num1 = result;
                result = "";
                num2 = button.textContent;
                currentDisplayScreen = `${num1} ${operator} ${num2}`;
                updateDisplayScreen();
                console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
             };
        });
    });
            
// Operator Button Functionality (+, -, *, /)
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        if (result === "" && num1 === "") { // Operator pressed for 1st time
            num1 = tempNumberContainer;
            tempNumberContainer = "";
            operator = button.textContent;
            currentDisplayScreen = `${num1} ${operator} ${num2}`;
            // num1 = "";
            updateDisplayScreen();
            console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } else if (result === "" && num1 != "") { // Operator is pressed instead of equals
            num2 = tempNumberContainer;
            tempNumberContainer = "";
            result = operate(num1, operator, num2);
            currentDisplayScreen = `${result} ${operator}`;
            updateDisplayScreen();
            operator = button.textContent;
            console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } else if (result === "" && num1 !== "" && num2 !== "") {
            
        }
    });
});

// // Event Listener for Equal button
// document.querySelector("#equals").addEventListener("click", () => {
//     num2 = tempNumberContainer; // Move user input from temp variable to num2
//     tempNumberContainer = ""; // Clear temp variable
//     if (result === "") {
//         result = operate(num1, operator, num2);
//         console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
//     } else {
//         result = operate(result, operator, num2);
//         console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
//     };
//     displayScreen.textContent = result;
// })

// Clear Button
document.querySelector("#clear").addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    tempNumberContainer = "";
    currentDisplayScreen = "";
    result = "";
    updateDisplayScreen();
    console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
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

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide,
//     operate,
// };