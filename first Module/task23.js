//Имеется массив строк. Строки в массиве могут повторяться любое количество раз. Вывести уникальные строки и их количество в массиве.

const arr = ["aaa", "aaa", "bbb", "bbb", "ccc", "ddd"];
const counts = {};
const checkTotal = (arr) => {
  arr.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });
  return counts;
};

console.log(checkTotal(arr));
