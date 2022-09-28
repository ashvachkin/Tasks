//Дана строка. Написать функцию, которая определит, содержит ли строка только символы 'a', 'b', 'c' или нет.

const str = "aaaaaaaaaaaaaaabc";

const findChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] === "a" || str[i] === "b" || str[i] === "c")) {
      return false;
    }
  }
  return true;
};
console.log(findChar(str));
