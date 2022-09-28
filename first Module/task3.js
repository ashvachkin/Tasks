//Написать функцию, принимающую массив строк и выводящих их на экран, используя цикл while.
// Элементы из массива извлекать с помощью оператора .pop()

const arr = ["3", "q", "123", "bv", "dd"];

const alertString = (arr) => {
  while (arr.length) {
    console.log(arr.pop());
  }
};

alertString(arr);
