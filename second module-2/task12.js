//Напишите функцию, которая переставит местами максимальный и минимальный элемент в массиве.

const arr = [1, 2131, 2, 12, 4, 5, -6, 123];

const changeArr = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] > max) {
      max = arr[j];
    }
    if (arr[j] < min) {
      min = arr[j];
    }
  }
  let minId = arr.indexOf(min);
  let maxId = arr.indexOf(max);
  arr[minId] = max;
  arr[maxId] = min;
  return arr;
};
console.log(changeArr(arr));
