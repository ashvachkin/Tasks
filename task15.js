//Реализуйте функцию, которая параметрами принимает два объекта и возвращает сообщение равны ли эти два объекта.

const a = { test: 8, text: 9 };
const b = { test: 8, text: 9 };

const compareObj = (obj1, obj2) => {
  const obj1Splited = Object.entries(obj1).flat();
  const obj2Splited = Object.entries(obj2).flat();
  console.log(obj1Splited, obj2Splited);
  for (let i = 0; i < obj1Splited.length; i++) {
    if (obj1Splited[i] === obj2Splited[i]) return true;
    else return false;
  }
};

console.log(compareObj(a, b));
