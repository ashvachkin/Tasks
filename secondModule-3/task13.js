//Реализуйте функцию. На вход функция принимает массив значений из 0 и 1. Верните объект сгруппированных данных {"0": 10, "1": 5}

const arr = [0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1];

const countElements = (arr) => {
  let result = {};
  let countNull = 0;
  let countOne = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      countNull++;
      result[0] = countNull;
    }
    if (arr[i] == 1) {
      countOne++;
      result[1] = countOne;
    }
  }
  return result;
};
console.log(countElements(arr));
