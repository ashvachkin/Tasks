//Реализовать функцию, которая отсортирует коллекцию по конкретному свойству объекта и переданному параметру (asc, desc).
//Если параметр (asc, desc) не передан, по умолчанию сортировка asc.
//asc - это сортировка по возрастанию, desc -  сортировка по убыванию.
//func (arr, "age", asc);

const arr = [
  { name: "test", age: 34, country: "RF" },

  { name: "test2", age: 12, country: "RF" },

  { name: "test1", age: 54, country: "RF" },
];

const sortArr = (arr, direction) => {
  if (direction) {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i].age > arr[i + 1].age) {
          let temp = arr[i].age;
          arr[i].age = arr[i + 1].age;
          arr[i + 1].age = temp;
        }
      }
    }
  } else if (direction === "desc") {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i].age < arr[i + 1].age) {
          let temp = arr[i].age;
          arr[i].age = arr[i + 1].age;
          arr[i + 1].age = temp;
        }
      }
    }
  }
  return arr;
};
console.log(sortArr(arr, "asc"));
