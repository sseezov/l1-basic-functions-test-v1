const sumTwoIntegers = (num1, num2) => { return num1 + num2 };

const unsafeDivision = (num1, num2) => {
  if (num2 === 0) {
    return 'the universe collapsed!';
  }
  return num1 / num2;
};
const castBoolean = (value) => {
  if (typeof value === 'boolean') {
    return 'already boolean';
  }
  return Boolean(value);
};

const sortByLength = (str1, str2, str3) => {
    let result = "";

    const length1 = str1.length;
    const length2 = str2.length;
    const length3 = str3.length;
  
    if (length1 <= length2 && length1 <= length3) {
      result += str1;
      if (length2 <= length3) {
        result += " " + str2 + " " + str3;
      } else {
        result += " " + str3 + " " + str2;
      }
    } else if (length2 <= length1 && length2 <= length3) {
      result += str2;
      if (length1 <= length3) {
        result += " " + str1 + " " + str3;
      } else {
        result += " " + str3 + " " + str1;
      }
    } else {
      result += str3;
      if (length1 <= length2) {
        result += " " + str1 + " " + str2;
      } else {
        result += " " + str2 + " " + str1;
      }
    }
  
    return result;
}
const encrypt = (str, letter, symbol) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
      const currentChar = str.charAt(i);
  
      if (currentChar.toLowerCase() === letter.toLowerCase()) {
        result += currentChar;  
      } else {
        result += symbol;
      }
    }
  
    return result;
}

export { sumTwoIntegers, unsafeDivision, castBoolean, sortByLength, encrypt };
