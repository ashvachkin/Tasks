//Реализовать функцию, которая отсортирует коллекцию по конкретному свойству объекта и переданному параметру (asc, desc).
//Если параметр (asc, desc) не передан, по умолчанию сортировка asc.
//asc - это сортировка по возрастанию, desc -  сортировка по убыванию.
//func (arr, "age", asc);

const arr = [
  { name: "test", age: 34, country: "RF" },

  { name: "test2", age: 12, country: "RF" },

  { name: "test1", age: 54, country: "RF" },
];

const sortArr = (arr, prop, direction) => {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i][prop] > arr[i + 1][prop]) {
        let temp = arr[i][prop];
        arr[i][prop] = arr[i + 1][prop];
        arr[i + 1][prop] = temp;
      }
    }
  }
  if (direction === "desc") {
    return arr.reverse();
  }
  return arr;
};

console.log(sortArr(arr, "age", "desc"));
