//Напишите функцию, которая находит наиболее часто встречаемый элемент массива.

const arr = [1, 1, 2, 3, 9, 9, 9, 9, 9, 9, 9, 9, 9];

const findElement = (arr) => {
  let temp = 1;
  let count = 0;
  let item;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
        if (count > temp) {
          temp = count;
          item = arr[i];
        }
      }
    }
    count = 0;
  }

  return item;
};
console.log(findElement(arr));
