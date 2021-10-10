function caesar(string, num) {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    let ascii = string[i].charCodeAt(0);
    let newNum = ascii + num;

    if (ascii === 32) {
      result.push(" ");
    }

    if (ascii >= 65 && ascii <= 90) {
      if (newNum <= 90) {
        result.push(String.fromCharCode(newNum));
      } else if (newNum > 90) {
        result.push(String.fromCharCode(65 + (newNum - 91)));
      }
    } else if (ascii >= 97 && ascii <= 122) {
      if (newNum <= 122) {
        result.push(String.fromCharCode(newNum));
      } else if (newNum > 122) {
        result.push(String.fromCharCode(97 + (newNum - 123)));
      }
    }
  }
  
  return result.join("");
}

module.exports = caesar;
