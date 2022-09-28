//Даны две строки. Напишите функцию, которая определит, содержится ли меньшая по длине строка в большей.

const firstStr = "tet ceducation on part 2 par";
const secondStr = "text";
const thirdStr = "on par";
const fourthStr = "cat";
const findSecond = (str1, str2) => {
  let flag = false;
  for (let j = 0; j < str1.length; j++) {
    if (str2[0] === str1[j]) {
      let temp = true;
      for (let g = 1; g < str2.length; g++) {
        temp = temp && str2[g] === str1[j + g];
      }
      flag = temp;
    }
  }
  return flag;
};
console.log(findSecond(firstStr, secondStr));
