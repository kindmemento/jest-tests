const { test, expect } = require('@jest/globals')
const calculator = require('../codes/calculator')

const add = subtract = divide = multiply = jest.fn();

test('calculator contains all four functions', () => {
    expect(calculator.add()).toBeDefined()
    expect(calculator.subtract()).toBeDefined()
    expect(calculator.divide()).toBeDefined()
    expect(calculator.multiply()).toBeDefined()
})