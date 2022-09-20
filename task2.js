const arr = [1, 20, 3, 4, 5, 6, 7, 8, 100, 10];

const checkEven = (arr) => {
  const evenArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    evenArr.push(arr[i]);
  }
  return evenArr;
};

console.log(checkEven(arr));
