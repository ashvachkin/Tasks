//Имеется двумерный массив. Пользуясь возможностями ES6 синтаксиса объединить его в одномерный массив.

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const concatArr = (arr) => {
  let newArr = [];
  arr.forEach((item) => (newArr = newArr.concat([...item])));
  console.log(newArr);
};

concatArr(arr);
