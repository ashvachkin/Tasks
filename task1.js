const count = (arr) => {
  const newArr = [];
  arr.forEach((element) => {
    const newItem = {
      name: element.name,
      total: element.amount * element.price,
    };
    newArr.push(newItem);
  });
  return newArr;
};
let someArr = [
  { name: "Milk", amount: 100, price: 150 },
  { name: "Coconuts", amount: 1000, price: 200 },
];
console.log(count(someArr));
