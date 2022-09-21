//В функцию подается несколько массивов. Вернуть один массив со всеми элементами.

const subArr1 = [1, 2, 3];
const subArr2 = [4, 5, 6];
const concatArr = (...subArrays) => {
  let arr = [];
  subArrays.forEach((item) => (arr = [...arr, ...item]));
  return arr;
};

console.log(concatArr(subArr1, subArr2));
