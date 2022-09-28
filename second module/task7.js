//Дана строка. Нужно написать функцию, которая возвращает значение true, если строка является палиндромом, или false если нет.

const str = "1123211";

const palindromeCheck = (str) => {
  arr = str.split("");
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(palindromeCheck(str));
