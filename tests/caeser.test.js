const { test, expect } = require('@jest/globals')
const caesar = require('../codes/caesar')

test('caesar encryption', () => {
    expect(caesar('a', 3)).toBe('d')
    expect(caesar('A', 5)).toBe('F')
    expect(caesar('AbCDE', 1)).toBe('BcDEF')
    expect(caesar('Zaez', 1)).toBe('Abfa')
})