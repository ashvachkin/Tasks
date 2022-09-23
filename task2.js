//В функцию передается несколько массивов.
//Из первого массива, переданного в функцию, вывести элементы, которые имеются во всех других массивах, переданных в функцию.

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3, 123];

const compareArr = (arr, ...arrays) => {
  let changes = [];
  let allArrys = [...arrays];
  for (let i = 0; i < arr.length; i++) {
    let flag1 = false;
    for (let j = 0; j < allArrys.length; j++) {
      let flag2 = false;
      for (let k = 0; k < allArrys[j].length; k++) {
        if (allArrys[j][k] === arr[i]) {
          flag2 = true;
        }
      }
      flag1 = flag2;
    }
    if (flag1) {
      changes.push(arr[i]);
    }
  }
  return changes;
};

console.log(compareArr(arr1, arr2, arr3));
