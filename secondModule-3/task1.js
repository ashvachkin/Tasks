//Напишите функцию, которая добавит в первый массив только те значения, которые присутствуют во втором, но нет в первом

const arr = [5, 8, -3];
const arr2 = [8, 7, -3, 1, 2];
const checkArr = (arr1, arr2) => {
  let newArr = arr1.concat(arr2)
  let filteredArr = [...new Set(newArr)]
  return filteredArr;
};

console.log(checkArr(arr, arr2));
