//Напишите функцию, которая заполнит массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
//Функция параметром принимает длину массива.

const fillArr = (num) => {
  let newArr = [];
  let newStr = ""
  for (let i = 1; i <= num; i++) {
    newStr+="x"
    newArr.push(newStr)
  }
  return newArr;
};

console.log(fillArr(20));
