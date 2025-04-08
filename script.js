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
            if (button.textContent === "." && tempNumberContainer.includes('.')) { // GUARD: prevent use of multiple periods
                return;
            } else if (tempNumberContainer.length > 4) {
                return;
                };
                    if (num1 === "" && operator === "" && num2 === "" && result === "") { // SCENARIO 1: All variables start empty, then the tempNum is assigned.
                        tempNumberContainer += button.textContent;
                        currentDisplayScreen += tempNumberContainer;
                        updateDisplayScreen();
                        console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
            } else if (tempNumberContainer.length > 4) {
                return;
                };
                    if (tempNumberContainer === "" && num1 !== "" && operator !== "" && num2 === "" && result === "") { // SCENARIO 2: num1 and operator start assigned, temp starts empty and gets assigned 
                        tempNumberContainer += button.textContent;
                        currentDisplayScreen += button.textContent;
                        updateDisplayScreen();
                        console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
            } else if (tempNumberContainer.length > 4) {
                return;
                };
                    if (tempNumberContainer === "" && num1 !== "" && operator !== "" && num2 !== "" && result !== "") { // SCENARIO 3: num1, operator, num2 are assigned
                        num1 = result;
                        result = "";
                        num2 = "";
                        tempNumberContainer += button.textContent;
                        currentDisplayScreen = `${num1} ${operator} ${tempNumberContainer}`;
                        updateDisplayScreen();
                        console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
            } else if (tempNumberContainer.length > 4) {
                return;
                };
                    if (tempNumberContainer === "" && num1 !== "" && operator !== "" && num2 !== "" && result !== "") { // SCENARIO 4: tempContainer is empty, everything else is assigned
                        tempNumberContainer += button.textContent;
                        num2 = "";
                        currentDisplayScreen += button.textContent;
                        updateDisplayScreen();
                        console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
            }
        });
    });
            
// Operator Button Functionality (+, -, *, /)
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        if (tempNumberContainer === "" && num1 === "" && operator === "" && num2 === "" && result === "") { // GUARD: Operator without something to calculate unless the operator is a '-' for negative numbers.
            currentDisplayScreen = "ERROR";
            updateDisplayScreen();
            console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } else if (num1 !== "" && operator === '/' && num2 === 0) { // Divide by zero error - NOT WORKING
            currentDisplayScreen = "Divide by zero? Bold move."
            updateDisplayScreen();
            num1 = "";
            console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } else if (tempNumberContainer !== "" && num1 === "" && num2 === "") {  // tempContainer is assigned, num1 and num2 are empty and the operator is selected.
            num1 = tempNumberContainer;
            tempNumberContainer = "";
            operator = button.textContent;
            currentDisplayScreen = `${num1} ${operator} ${num2}`;
            updateDisplayScreen();
            console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } else if (tempNumberContainer === "" && num1 !== "" && num2 === "") { // num1 is assigned, num2 is empty, display updates to show operator
            operator = button.textContent;
            currentDisplayScreen += `${num1} ${operator} ${num2}`;
            updateDisplayScreen();
            console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } else if (tempNumberContainer !== "" && num1 !== "" && num2 === "") { // num1 and tempContainer are assigned, operator is selected again (rather than equal)
            num2 = tempNumberContainer;
            tempNumberContainer = "";
            result = operate(num1, operator, num2);
            currentDisplayScreen = `${result}`;
            updateDisplayScreen();
            operator = button.textContent;
            currentDisplayScreen = `${result} ${operator}`;
            updateDisplayScreen();
            console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } else if (tempNumberContainer === "" && num1 !== "" && num2 !== "") { // tempContainer is empty, numbers are assigned
            result = operate(num1, operator, num2);
            currentDisplayScreen = `${result}`;
            updateDisplayScreen();
            num1 = result;
            result = "";
            operator = button.textContent;
            currentDisplayScreen += `${result} ${operator}`;
            updateDisplayScreen();
            console.log(`tempNum is ${tempNumberContainer} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
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