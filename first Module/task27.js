//Имеется двумерный массив. Пользуясь возможностями ES6 синтаксиса объединить его в одномерный массив.

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const concatArr = (arr) => {
  arr.forEach((item) => arr.concat([...item]));
  return arr.flat();
};
console.log(concatArr(arr));
