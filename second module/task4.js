//Напишите функцию range(), принимающую два аргумента: начало и конец диапазона. Функция возвращает массив, который содержит все числа из диапазона, включая начальное и конечное.
//Третий необязательный аргумент функции range() – шаг для построения массива. Убедитесь, что функция range() работает с отрицательным шагом.

const range = (start, end, step) => {
  let arrRange = [];
  console.log(1);
  if (step > 0) {
    for (let i = start; i <= end; i = i + step) {
      arrRange.push(i);
    }
  } else {
    for (let i = start; i >= end; i = i + step) {
      arrRange.push(i);
    }
  }
  return arrRange;
};
console.log(range(19, 5, -1));
