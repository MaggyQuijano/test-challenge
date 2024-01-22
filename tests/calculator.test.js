const { default: expect } = require('expect');

const calculator = require('../calculator');

test('sum a + b to equal 3', () => {
    expect(calculator.sum(1,2)).toBe(3);
})

test('substracts a - b', () => {
   expect(calculator.substract(10,2)).toBe(8);
})

test('multiply a * b', () => {
    expect(calculator.multiply(5,2)).toBe(10);
})

test('divides a / b', () => {
    expect (calculator.divide(10,2)).toBe(5);
})

test('Returns a to power a ** b', () => {
    expect(calculator.power(4,4)).toBe(256);
})

