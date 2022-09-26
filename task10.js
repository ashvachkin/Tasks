//Вернуть массив тех значений, которые есть в первом, но нет во втором.

const arr = [9, 1, 2, 3, 4, 5, 1112, 3423, 123, 98];
const secondArr = [3423, 1, 2, 3, 123, 1132, 13212];

const findDuplicates = (arr1, arr2) => {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let flag = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};

console.log(findDuplicates(arr, secondArr));
