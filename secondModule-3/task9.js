//Напишите функцию, которая удалит из первого массива все значения, которые указаны во втором массиве.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [2, 5, 9];

const deleteFromArr = (arr, arr2) => {
  let sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (sortedArr[i] === arr2[j]) {
        delete sortedArr[arr2[j] - 1];
      }
    }
  }
  return arr.flat();
};
console.log(deleteFromArr(arr, arr2));
