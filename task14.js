//Написать функцию, принимающую два числа и любую операцию над этими числами (сложение, вычитание или др.). 
//В функции выполнить эту операцию и вернуть результат.

const operation = (first, second, operator) => {
  let result = 0;
  switch (operator) {
    case "+":
      result = first + second;
      return result;
    case "-":
      result = first - second;
      return result;
    case "**":
      result = first ** second;
      return result;
    case "/":
      result = first / second;
      return result;
    case "*":
      result = first * second;
      return result;
    case "%":
      result = first % second;
      return result;
  }
};
console.log(operation(4,5,"*"));
