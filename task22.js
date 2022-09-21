//Написать функцию, которая принимает три параметра: массив array и два числа start и end.
//Функция должна возвращать массив фрагмент массива array, начиная с индекса start и заканчивая end.

const arr = [12, 2, 37, 44, 5, 6, 71, 8, 9, 111111];
const arrSplit = (arr, start, end) => {
  return (slicedArr = arr.slice(start, end));
};

console.log(arrSplit(arr, 0, 7));
