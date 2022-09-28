//Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }]. Вывести имена тех пользователей, возраст которых больше 18 лет.

const arr = [
  { name: "Ivan", age: 24 },
  { name: "Oleg", age: 16 },
  { name: "Igor", age: 24 },
];
const maxAge = 18

const sortByAge = (arr) => {
  arr.forEach((elem) => {
    if (elem.age > maxAge) {
      console.log(elem.name);
    }
  });
};

sortByAge(arr);
