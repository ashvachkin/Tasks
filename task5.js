const arr = [
  { a: 5, b: 3, c: 4 },
  { a: 1, b: 3, c: 4 },
  { a: 4, b: 7, c: 4 },
  { a: 2, b: 2, c: 3 },
];

const perimeter = (arr) => {
  const newArr = [];
  arr.forEach((elem) => {
    const newItem = {
      p: elem.a + elem.b + elem.c,
    };
    newArr.push(newItem);
  });
  return newArr;
};

console.log(perimeter(arr));
