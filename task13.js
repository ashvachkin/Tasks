//Создайте функцию, которая параметром принимает объект. Функция умножает все числовые свойства объекта на 2.

const startObj = {
  name: "test",
  age: 25,
  weight: 65,
  height: 165,
};

const multiply = (obj) => {
  for (props in obj) {
    if (typeof obj[props] == "number") {
      obj[props] *= 2;
    }
  }
  return obj;
};
