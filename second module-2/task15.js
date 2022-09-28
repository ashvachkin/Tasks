//Напишите функцию, которая заполнит массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
//Функция параметром принимает длину массива.

const fillArr = (num) => {
  let newArr = [];
  for (let i = 1; i <= num; i++) {
    newArr.push("x".repeat(i));
  }
  return newArr;
};

console.log(fillArr(10));
