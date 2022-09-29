//Напишите функцию, которая преобразует массив вида let arr = [ { name: "width", value: 300 }, { name: "height", value: 100 } ]; в объект let obj = { width: 300, height: 100 };
//Количество объектов в массиве неограниченно.

const arr = [
  { name: "width", value: 300 },
  { name: "height", value: 100 },
];
const createObj = (arr) => {
  let newObj = {};
  arr.forEach((item) => {
    newObj[item.name] = item.value;
  });
  return newObj;
};
console.log(createObj(arr));
