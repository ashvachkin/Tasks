//Реализуйте функцию, котора параметром принимает строку. Выведите сформированный объект из параметров строки браузера.

const str = "https://underscorejs.org?a=4&b=8";

const createObj = (str) => {
  let newObj = {};
  let firstSplit = str.split("?");
  let secondSplit = firstSplit[1].split("&");
  for (let i = 0; i < secondSplit.length; i++) {
    newObj[secondSplit[i][0]] = +secondSplit[i][2];
  }
  return newObj;
};

console.log(createObj(str));
