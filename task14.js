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
