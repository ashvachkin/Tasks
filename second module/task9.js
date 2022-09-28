//Отфильтровать коллекцию по нескольким полям.
//Функция параметрами принимает массив, первое значение - поле с которым равно, второе значение, больше которого другое поле.
//Например, в коллекции мне нужно вывести значения, в которых возраст больше 18, а страна 'RF'.

const arr = [
  { name: "test", age: 34, country: "RF" },
  { name: "test2", age: 12, country: "RF" },
  { name: "test1", age: 54, country: "RF" },
];

const filterObj = (arr, country, age) => {
  const newArr = [];
  arr.forEach((item) => {
    if (item.country === country && item.age >= age) {
      newArr.push(item);
    }
  });
  return newArr;
};

console.log(filterObj(arr, "RF", 18));
