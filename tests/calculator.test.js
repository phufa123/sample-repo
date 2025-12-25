const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator', () => {

    // ADD
    test('adds 2 + 3 to equal 5', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('adds -2 + -3 to equal -5', () => {
        expect(add(-2, -3)).toBe(-5);
    });

    test('adds decimal numbers', () => {
        expect(add(2.5, 1.5)).toBe(4);
    });

    // SUBTRACT
    test('subtracts 5 - 3 to equal 2', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts negative numbers', () => {
        expect(subtract(-5, -3)).toBe(-2);
    });

    // MULTIPLY
    test('multiplies 4 * 3 to equal 12', () => {
        expect(multiply(4, 3)).toBe(12);
    });

    test('multiplies by zero', () => {
        expect(multiply(5, 0)).toBe(0);
    });

    // DIVIDE
    test('divides 10 / 2 to equal 5', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('divides decimal numbers', () => {
        expect(divide(5, 2)).toBe(2.5);
    });

    test('throws error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    // ERROR HANDLING
    test('throws error when input is not a number', () => {
        expect(() => add('2', 3)).toThrow('Invalid input');
        expect(() => subtract(null, 3)).toThrow('Invalid input');
        expect(() => multiply(undefined, 2)).toThrow('Invalid input');
        expect(() => divide({}, 2)).toThrow('Invalid input');
    });

});
