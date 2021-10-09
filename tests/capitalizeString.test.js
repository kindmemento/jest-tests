const { test, expect } = require('@jest/globals');
const capitalizeString = require('../codes/capitalizeString');

test('capitalize string', () => {
    expect(capitalizeString('asdfg')).toBe('Asdfg')
})
