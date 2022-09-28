//Дана строка. Написать функцию, которая определит, содержит ли строка только символы 'a', 'b', 'c' или нет.

const str = "a123bc";

const findChar = (str) => {
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) === "a" ||
      str.charAt(i) === "b" ||
      str.charAt(i) === "c"
    ) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
};
console.log(findChar(str));
