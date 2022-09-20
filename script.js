const newArr = [];
const arr = [6, 4, 8, -2, 6, 8, -1, 7, 8, 8, -9, 3, 5];
const filterPositive = (arr) => {
  arr.forEach((value) => {
    if (value > 0) {
      newArr.push(value);
    }
  });
  return newArr;
};

const filterGreater= (arr, value1) => {
  arr.forEach((value) => {
    if (value > value1) {
      newArr.push(value);
    }
  });
  return newArr;
};

let resultPositive = filterPositive(arr);
let resultGreater = filterGreater(arr, 4);
