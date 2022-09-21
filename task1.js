//Имеется массив объектов вида [{ name: “Milk”, price: 20, amount: 15 }, …], хранящий список товаров с их ценой и остатком на складе. 
//Используя оператор map заполните новый массив суммарной стоимостью каждого товара на складе (price * amount).

const someArr = [
  { name: "Milk", amount: 100, price: 150 },
  { name: "Coconuts", amount: 1000, price: 200 },
];

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

console.log(count(someArr));
