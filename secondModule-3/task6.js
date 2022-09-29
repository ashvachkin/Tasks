//Напишите функцию, которая сгруппирует объекты заказов по имени.

const arr = [
  { name: "test", price: 200 },

  { name: "test1", price: 300 },

  { name: "test", price: 100 },

  { name: "test", price: 600 },
];

const sortByName = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    let index = 0;
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j].name === arr[i].name) {
        flag = true;
        index = j;
        break;
      }
    }
    if (flag) {
      newArr[index].price += arr[i].price;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(sortByName(arr));
