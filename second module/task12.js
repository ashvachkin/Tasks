//Реализуйте функцию, которая принимает на вход объект типа { "dog": 6, "cat": 11 } и возвращает массив пар.[ ["dog", 6], ["cat", 11] ]

const obj = { dog: 6, cat: 11 };

const createArr = (obj) => {
  return Object.entries(obj);
};

console.log(createArr(obj));
