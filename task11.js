const table = [];

for (let i = 1; i <= 10; i++) {
  const subArr = [];

  for (let j = 1; j <= 10; j++) {
    subArr.push(i * j);
  }
  table.push(subArr);
}

console.log(table);
