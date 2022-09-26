//Написать функцию, которая возвращает отсортированный массив уникальных значений.

const arr = [1, 23, 4, 123, 11, 999, 1, 11];

const findUniq = (arr) => {
  let sorted = [];
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    if (arr[j] !== arr[j + 1]) {
      sorted.unshift(arr[j]);
    }
  }
  return sorted;
};

console.log(findUniq(arr));
