//Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
//Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

const arr = [
  [1, 2, 3],
  [3, 2, 1],
  [1, 4],
];

const sumArr = (arr) => {
  let newArr = arr.flat();
  let total = newArr.reduce((a, b) => a + b);
  return total;
};
console.log(sumArr(arr));
