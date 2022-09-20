const arr = [5, 10, 15, 20, 10, 25, 20, 30, 15];
const max = 55;

const sumCheck = (arr, max) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum >= max) {
      break;
    }
  }
  return sum;
};

console.log(sumCheck(arr, max));
