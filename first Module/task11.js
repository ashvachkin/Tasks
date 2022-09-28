//Заполнить двумерный массив таблицей умножения от 0 до 10 и вывести её в удобочитаемом виде.

const table = [];

for (let i = 1; i <= 10; i++) {
  const subArr = [];
  
  for (let j = 1; j <= 10; j++) {
    subArr.push(`${i} * ${j}` + " " + "=" + " " + i * j);
  }
  table.push(subArr);
}

console.log(table);
