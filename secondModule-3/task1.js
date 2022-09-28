//Напишите функцию, которая добавит в первый массив только те значения, которые присутствуют во втором, но нет в первом

const arr = [5, 8, -3];
const arr2 = [8, 5, 7, -3];
let index = 0;
const checkArr = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let flag = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        flag = true;
        index = j;
      }
    }
    if (flag === true) {
      newArr.push(arr2[index]);
    }
  }
  return newArr;
};
console.log(checkArr(arr, arr2));
