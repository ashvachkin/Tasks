//Напишите функцию, которая четное число возводит в квадрат, а нечетное - в куб.
// После умножает полученное значение на второй параметр. Затем прибавляет третий параметр и находит корень от получившегося результата, округленный до сотых. Но за счет того, что функция вызывает функцию.

let a = 7;
let b = 3;
let c = 5;

const checkNum = (a, b, c) => {
  oddOrEven = a % 2;
  oddOrEven = 0 ? (a = a ** 2) : (a = a ** 3);
  let newNum = a * b;
  newNum += c;
  let finalResult = newNum ** (1 / 2);
  finalResult = finalResult.toFixed(2);
  return finalResult;
};

console.log(checkNum(a, b, c));
