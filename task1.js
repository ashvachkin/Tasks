//Написать функцию, которая отсортирует массив чисел по возрастанию (asc) или убыванию (desc).

const arr = [1, 3, 123, 2, 12, -123, 1233];

const sortArr = (arr, way) => {
  if (way === "asc") {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
  } else if (way === "desc") {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] < arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
  }
  return arr;
};
console.log(sortArr(arr, "desc"));
