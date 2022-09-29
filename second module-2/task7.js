//Написать функцию, которая отфильтрует коллекцию, где у свойства есть хоть какое-то значение.

const arr = [
  { name: "test", age: 34, country: "RF" },

  { name: "", age: null, country: "" },

  { name: "", age: null, country: "" },

  { name: "", age: 12, country: "" },

  { name: "", age: null, country: "RF" },
];

const findNotEmpty = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = 0; j < Object.values(arr[i]).length; j++) {
      if (Object.values(arr[i])[j]) {
        console.log(Object.values(arr[i])[j]);
        flag = false;
        break;
      }
    }
    if (flag === false) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(findNotEmpty(arr));
