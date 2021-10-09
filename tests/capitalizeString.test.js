const { test, expect } = require('@jest/globals');
const capitalizeString = require('./testing');

test('capitalize string', () => {
    expect(capitalizeString('asdfg')).toBe('Asdfg')
})
