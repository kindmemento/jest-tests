const { test, expect } = require('@jest/globals')
const analyzeArray = require('../codes/arrayAnalysis')

test('analyzed correctly', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({average: 4, min: 1, max: 8, length: 6})
    expect(analyzeArray([1,2,3,4,5,6,7,8,9,10])).toMatchObject({average: 5.5, min: 1, max: 10, length: 10})
    expect(analyzeArray([5,7,3,5,8])).toMatchObject({average: 5.6, min: 3, max: 8, length: 5})
})