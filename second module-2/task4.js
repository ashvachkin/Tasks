//Напишите функцию, которая возвращает рандомный элемент из массива.

const arr = [1, 2, 3, 4, 5, 6, 1, 23, 123, 1];

const randomiseArr = (arr) => {
  let min = 0;
  let max = arr.length;
  return arr[Math.floor(Math.random() * (max - min + 1)) + min];
};

console.log(randomiseArr(arr));
