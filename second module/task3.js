//Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).

const arr = [4, 7, 1, 9, 6, 8, 4, 6, 3, 6, 1];

const removeDuplicates = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        delete arr.splice(i, 1);
      }
    }
  }
  return arr;
};

console.log(removeDuplicates(arr));
