//Даны две строки. Напишите функцию, которая определит, содержится ли меньшая по длине строка в большей.
const firstStr = "text education part 2";
const secondStr = "text";

const findSecond = (str1, str2) => {
  let splitedStr = [];
  splitedStr = str1.split(" ");
  for (let i = 0; i < splitedStr.length; i++) {
    if (splitedStr[i] === str2.split()[0]) {
      return true;
    } else return false;
  }
};

console.log(findSecond(firstStr, secondStr));
