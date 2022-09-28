//Дана строка. Вывести первые три символа и последние три символа, если длина строки больше 5.
//Иначе вывести первый символ столько раз, какова длина строки.

const str = "test asdasd adadsasdasdasda";

const splitStr = (str) => {
  let splitedStr = str;
  if (splitedStr.length > 5) {
    let newStr = splitedStr.slice(0, 3) + splitedStr.slice(-3);
    console.log(newStr);
    return newStr;
  } else {
    for (let i = 0; i < splitedStr.length; i++) {
      console.log(splitedStr[0]);
    }
  }
};

splitStr(str);
