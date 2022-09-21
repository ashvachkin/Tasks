//Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }].
//Рассчитать минимальный и максимальный возраст всех пользователей. Результат записать в объект вида { min: …, max: … }

const arr = [
  { name: "Ivan", age: 24 },
  { name: "Oleg", age: 16 },
  { name: "Igor", age: 32 },
];

const findAge = (arr) => {
  if (arr.length) {
    let minAge = arr[0].age;
    let maxAge = arr[0].age;
    arr.forEach((item) => {
      if (item.age <= minAge) {
        minAge = item.age;
      }
      if (item.age >= maxAge) {
        maxAge = item.age;
      }
    });
    return { max: maxAge, min: minAge };
  }
};

console.log(findAge(arr));
