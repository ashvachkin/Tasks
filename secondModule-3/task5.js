//Дан массив чисел. Каждое число в массиве встречается четное количество раз, кроме одного.
//Реализуйте и экспортируйте функцию по умолчанию, которая принимает массив чисел и возвращает число, которое встречается нечетное количество раз.

const arr = [1, 2, 3, 4, 5, 1, 1, 2, 3, 4, 5, 6, 4];

const findOdd = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i += 2) {
    if (sortedArr[i] === sortedArr[i + 1]) {
    } else return sortedArr[i];
  }
};

console.log(findOdd(arr));
