//Удалить из массива значения, индексы которых указаны во втором массиве.

const arr = [1, 2, 3, 41, 5, 6, 7, 1];
const deleteArr = [1, 5, 2];

const deleteFromArr = (arr, deleteArr) => {
  for (let i = 0; i < deleteArr.length; i++) {
    delete arr[deleteArr[i]];
  }
  return arr.flat();
};

console.log(deleteFromArr(arr, deleteArr));
