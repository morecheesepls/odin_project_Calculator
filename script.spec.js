const script = require('./script');

// ADDITION FUNCTION TESTS
describe('add', () => {
    test('adds two positive whole numbers', () => {
        expect(script.add(5, 3)).toBe(8);
    });
});


// SUBTRACTION FUNCTION TESTS
describe('subtract', () => {
    test('subtract two positive whole numbers', () => {
        expect(script.subtract(5, 3)).toBe(2);
    });
});


// MULTIPLICATION FUNCTIONS TESTS
describe('multiply', () => {
    test('multiplies two positive whole numbers', () => {
        expect(script.multiply(5, 3)).toBe(15);
    });
});


// DIVISION FUNCTION TESTS
describe('divide', () => {
    test('divides a whole number by a divisible whole number e.g. no remainder', () => {
        expect(script.divide(15, 3)).toBe(5);
    });
});


// OPERATE FUNCTION TESTS - This is the function that passes the user's input to the individual calculation functions e.g. add, subtract, multiply, divide.
describe('operate', () => {
    test('adds two positive whole numbers', () => {
        expect(script.operate(15, "+", 3)).toBe(18);
    });
});

describe('operate', () => {
    test('subtract two positive whole numbers', () => {
        expect(script.operate(15, "-", 3)).toBe(12);
    });
});

describe('operate', () => {
    test('multiplies two positive whole numbers', () => {
        expect(script.operate(15, "*", 3)).toBe(45);
    });
});

describe('operate', () => {
    test('divides a whole number by a divisible whole number e.g. no remainder', () => {
        expect(script.operate(15, "/", 3)).toBe(5);
    });
});