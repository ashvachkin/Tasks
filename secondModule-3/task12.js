//Дан массив строк. Написать функцию, которы упорядочит массив по длине строк.

const arr = ["test", "education", "2", "exceed.team", "asdddddddddddddd", "23"];

const sortArr = (arr) => {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i + 1].length) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(sortArr(arr));
