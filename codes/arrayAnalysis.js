function analyzeArray(arr) {
    const sum = (previousValue, currentValue) => previousValue + currentValue;
    let average = (arr.reduce(sum)) / arr.length;
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    
    return {
        average,
        min,
        max,
        length: arr.length
    }
}

module.exports = analyzeArray;