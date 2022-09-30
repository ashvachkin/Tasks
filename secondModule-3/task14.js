//Напишите функцию, которая возвращает true, если в массиве есть все значения, которые указаны во втором.

const arr = [4, 8, 1, 9, -3];
const arr2 = [1, 4, 8];

const compareArrs = (arr, arr2) => {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr.includes(arr2[j])) {
        flag = true;
      } else flag = false;
    }
  }
  return flag;
};
console.log(compareArrs(arr, arr2));
