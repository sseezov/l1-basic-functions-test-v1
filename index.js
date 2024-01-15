const sumTwoIntegers = (a, b) => a + b;

const unsafeDivision = (a, b) => (b === 0 ? 'the universe collapsed!' : a / b)

const castBoolean = (a) => typeof a === 'boolean' ? "already boolean" : !!a

const sortByLength = (str1, str2, str3) => {
  let short = str1;
  let middle;
  let long = str3;

  if (str2.length < short.length) {
    short = str2;
  }
  if (str3.length < short.length) {
    short = str3;
  }
  if (str1.length > long.length) {
    long = str1;
  }
  if (str2.length > long.length) {
    long = str2;
  }
  if (str1 !== long && str1 !== short) {
    middle = str1;
  }
  if (str2 !== long && str2 !== short) {
    middle = str2;
  }
  if (str3 !== long && str3 !== short) {
    middle = str3;
  }
  return `${short} ${middle} ${long}`
}
// простите, это омерзительное задание, я его сначала написал, а потом уже решил и ужаснулся, но теперь из песни слов не выкинешь

const encrypt = (string, letter, symbol) => {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== letter) {
      result += symbol;
    } else {
      result += string[i]
    }
  }
  return result;
}

export { sumTwoIntegers, unsafeDivision, castBoolean, sortByLength, encrypt }
