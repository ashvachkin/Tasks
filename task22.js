//Написать функцию, которая принимает три параметра: массив array и два числа start и end.
//Функция должна возвращать массив фрагмент массива array, начиная с индекса start и заканчивая end.

const arr = [12, 2, 37, 44, 5, 6, 71, 8, 9, 111111];

const arrSplit = (arr, start, end) => {
  let result = [];

  if (!end || end > arr.length) {
    for (let i = start; i < arr.length; i++) {
      result.push(arr[i]);
    }
  } else {
    for (let i = start; i < end; i++) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(arrSplit(arr, 2, 7));
