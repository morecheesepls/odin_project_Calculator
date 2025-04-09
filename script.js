let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let tempNumber = "";
let currentDisplayScreen = "";
const displayScreen = document.querySelector("#calcScreen");
const updateDisplayScreen = () => displayScreen.textContent = currentDisplayScreen;

// Number Button Functionality
document.querySelectorAll(".displayButton").forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent === "." && tempNumber.includes('.')) { // GUARD: prevent use of multiple periods
                return;
            } else if (tempNumber.length > 7) { // GUARD: limit the size of the number the user can input to prevent overflowing the display
                return;
            } else if (tempNumber === "" && num1 === "" && operator === "" && num2 === "" && result === "") { 
                currentDisplayScreen = "";
                updateDisplayScreen();
                tempNumber += button.textContent;
                currentDisplayScreen += tempNumber;
                updateDisplayScreen();
                console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
            } else if (tempNumber === "" && num1 !== "" && operator !== "" && num2 === "" && result === "") { 
                tempNumber += button.textContent;
                currentDisplayScreen += button.textContent;
                updateDisplayScreen();
                console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
            } else if (tempNumber === "" && num1 !== "" && operator !== "" && num2 !== "" && result !== "") { 
                num1 = result;
                result = "";
                num2 = "";
                tempNumber += button.textContent;
                currentDisplayScreen = `${num1} ${operator} ${tempNumber}`;
                updateDisplayScreen();
                console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
            } else if (tempNumber === "" && num1 !== "" && operator !== "" && num2 !== "" && result !== "") { 
                tempNumber += button.textContent;
                num2 = "";
                currentDisplayScreen += button.textContent;
                updateDisplayScreen();
                console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
            } else if (tempNumber !== "" && num1 === "" && operator === "" && num2 === "" && result === "") {
                tempNumber += button.textContent;
                currentDisplayScreen += button.textContent;
                updateDisplayScreen();
                console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
            } else if (tempNumber !== "" && num1 !== "" && operator !== "") {
                tempNumber += button.textContent;
                currentDisplayScreen = `${num1} ${operator} ${tempNumber}`;
                updateDisplayScreen();
                console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
            }
        });
    });
            
// Operator Button Functionality (+, -, *, /)
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        if (tempNumber === "" && num1 === "" && operator === "" && num2 === "" && result === "") { // GUARD1: Cannot choose operators back to back.
            currentDisplayScreen = "ERROR";
            updateDisplayScreen();
            console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } else if (tempNumber === "" && num1 === "" && operator === "" && num2 === "" && result !== "") { // GUARD2: Cannot choose operators back to back.
            currentDisplayScreen = "ERROR";
            updateDisplayScreen();
            console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } else if (tempNumber === "" && num1 !== "" && operator !== "" && num2 === "") {
            return;
        } else if (tempNumber === "0" && num1 !== "" && operator === "/") { // GUARD: Divide by zero error.
            currentDisplayScreen = "Divide by zero? Bold."
            updateDisplayScreen();
            tempNumber = "";
            num1 = "";
            operator = "";
            console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
            return;
        } else if (tempNumber !== "" && num1 === "" && num2 === "") {
            num1 = tempNumber;
            tempNumber = "";
            operator = button.textContent;
            currentDisplayScreen = `${num1} ${operator} ${num2}`;
            updateDisplayScreen();
            console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } else if (tempNumber === "" && num1 !== "" && num2 === "") {
            operator = button.textContent;
            currentDisplayScreen += `${num1} ${operator} ${num2}`;
            updateDisplayScreen();
            console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } else if (tempNumber !== "" && num1 !== "" && num2 === "") {
            num2 = tempNumber;
            tempNumber = "";
            result = operate(num1, operator, num2);
            currentDisplayScreen = `${result}`;
            updateDisplayScreen();
            operator = button.textContent;
            currentDisplayScreen = `${result} ${operator}`;
            updateDisplayScreen();
            console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } else if (tempNumber === "" && num1 !== "" && num2 !== "" && result === "") {
            result = operate(num1, operator, num2);
            currentDisplayScreen = `${result}`;
            updateDisplayScreen();
            num1 = result;
            result = "";
            operator = button.textContent;
            currentDisplayScreen += `${result} ${operator}`;
            updateDisplayScreen();
            console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        } 
    });
});

// Event Listener for Equal button
document.querySelector("#equals").addEventListener("click", () => {
    if (tempNumber !== "" && num1 === "" && operator === "" && num2 === "" && result === "") {
        tempNumber = "";
        num1 = "";
        operator = "";
        currentDisplayScreen = this.textContent;
        updateDisplayScreen();
        console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
    } else if (tempNumber === "0" && num1 !== "" && operator === '/') { // GUARD: Divide by zero error.
        currentDisplayScreen = "Divide by zero? Bold."
        updateDisplayScreen();
        tempNumber = "";
        num1 = "";
        operator = "";
        console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
        return;
    } else if (tempNumber !== "" && num1 !== "" && operator !== "" && num2 === "" && result === "") {
        num2 = tempNumber;
        tempNumber = "";
        result = operate(num1, operator, num2);
        currentDisplayScreen = `${result}`;
        updateDisplayScreen();
        num1 = "";
        operator = "";
        num2 = "";
        result = "";
        console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
    }
});

// Clear Button
document.querySelector("#clear").addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    tempNumber = "";
    currentDisplayScreen = "";
    result = "";
    updateDisplayScreen();
    console.log(`tempNum is ${tempNumber} | num1 is ${num1} | operation is ${operator} | num2 is ${num2} | result is ${result}`);
});

// Back button - deletes last input


// Calculation Operator Functions
const add = function(a, b) {
	const additionResult = parseFloat(a) + parseFloat(b);
    if (additionResult.toString().length > 4) {
        return additionResult.toFixed(4);
    } else if (additionResult.toString().length <= 4) {
        return additionResult;
    };
    return additionResult;
};

const subtract = function(a, b) {
	const subtractionResult = a-b;
    if (subtractionResult.toString().length > 4) {
        return subtractionResult.toFixed(4);
    } else if (subtractionResult.toString().length <= 4) {
        return subtractionResult;
    };
    return subtractionResult;
};

const multiply = function(a, b) {
    const multiplicationResult = a*b;
    if (multiplicationResult.toString().length > 4) {
        return multiplicationResult.toFixed(4);
    } else if (multiplicationResult.toString().length <= 4) {
        return multiplicationResult;
    };
    return multiplicationResult;
};

const divide = function(a, b) {
    const divisionResult = a/b;
    if (divisionResult.toString().length > 4) {
        return divisionResult.toFixed(4);
    } else if (divisionResult.toString().length <= 4) {
        return divisionResult;
    };
    return divisionResult;
};

// Calculation Function
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
    return;
};

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide,
//     operate,
// };