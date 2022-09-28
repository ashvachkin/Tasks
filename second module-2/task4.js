//Напишите функцию, которая возвращает рандомный элемент из массива.

const arr = [1,2,3,4];

const randomiseArr = (arr) => {
  if (arr.length) {
    let min = 0;
    let max = arr.length-1;
    return arr[Math.floor(Math.random() * (max - min + 1)) + min];
  } else return false;
};

console.log(randomiseArr(arr));
console.log(randomiseArr(arr));
console.log(randomiseArr(arr));
console.log(randomiseArr(arr));
console.log(randomiseArr(arr));
console.log(randomiseArr(arr));
console.log(randomiseArr(arr));
console.log(randomiseArr(arr));
console.log(randomiseArr(arr));

