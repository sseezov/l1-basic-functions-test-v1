export const sumTwoIntegers = (num1, num2) => {
    let result = num1 + num2;
    return result;
  };
  console.log(sumTwoIntegers(3, 7));
  
  
  
  export const unsafeDivision = (num1, num2) => {
    let result = num1 / num2;
    if (num2 != 0) {
      return result;
    } else return "the universe collapsed!";
  };
  console.log(unsafeDivision(15, 0));
  
  
  
  export const castBoolean = (value) => {
    let result = !!value;
    if (value != result) {
      return result;
    } else return "already boolean";
  };
  console.log(castBoolean(false));
  
  
  
  export const sortByLength = (str1, str2, str3) => {
    const len1 = str1.length;
    const len2 = str2.length;
    const len3 = str3.length;
  
    let shortest, middle, longest;
  
    if (len1 <= len2 && len1 <= len3) {
      shortest = str1;
      middle = (len2 <= len3) ? str2 : str3;
      longest = (len2 <= len3) ? str3 : str2;
    } else if (len2 <= len1 && len2 <= len3) {
      shortest = str2;
      middle = (len1 <= len3) ? str1 : str3;
      longest = (len1 <= len3) ? str3 : str1;
    } else {
      shortest = str3;
      middle = (len1 <= len2) ? str1 : str2;
      longest = (len1 <= len2) ? str2 : str1;
    }
  
    return `${shortest} ${middle} ${longest}`;
  }
  console.log(sortByLength('let', 'ex', 'H'));
  
  
  
  export const encrypt = (str, letter, symbol) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== letter) {
        result += symbol;
      } else {
        result += str[i];
      }
    }
    return result;
  }
  console.log(encrypt('Hexlet', 'e', '*')); 