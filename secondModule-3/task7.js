//Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

let num = 987;

function concatNums(num) {
  let result = 0;
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    result += +str[i];
  }
  if (result <= 9) {
    return result;
  } else return concatNums(result.toString());
}

console.log(concatNums(num));
