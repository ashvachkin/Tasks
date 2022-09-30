//Написать функцию фильтрации коллекции, где у объекта есть свойство с конкретным значением.

const arr = [
  { name: "test", age: 45, country: "RF", tel: "+79846466744" },
  { name: "test1", age: 23, country: "RF", tel: "+79464747484" },
  { name: "test2", age: 18, country: "RF", tel: "+376483876346" },
];

const filterArr = (arr, prop, value) => {
  let result = [];
  result.push(arr.find((item) => item[prop] === value));
  return result;
};
console.log(filterArr(arr, "age", 23));
