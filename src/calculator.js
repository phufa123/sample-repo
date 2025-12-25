function validateInput(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input');
    }
}

function add(a, b) {
    validateInput(a, b);
    return a + b;
}

function subtract(a, b) {
    validateInput(a, b);
    return a - b;
}

function multiply(a, b) {
    validateInput(a, b);
    return a * b;
}

function divide(a, b) {
    validateInput(a, b);
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};
