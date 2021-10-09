const { test, expect } = require('@jest/globals');
const reverseString = require('../codes/reverseString')

test('string reversed', () => {
    expect(reverseString('abcdef')).toBe('fedcba')
})