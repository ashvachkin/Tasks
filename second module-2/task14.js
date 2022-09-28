//Реализуйте функцию, котора параметром принимает строку. Выведите сформированный объект из параметров строки браузера.

const str = "https://underscorejs.org?a=4&b=8";
const str2 = "https://underscorejs.org?id=123&limit=5&offset=0";
const createObj = (str) => {
  let newObj = {};
  let firstSplit = str.split("?");
  let secondSplit = firstSplit[1].split("&");
  for (let i = 0; i < secondSplit.length; i++) {
    let thirdSplit = secondSplit[i].split("=");
    newObj[thirdSplit[0]] = +thirdSplit[1];
  }
  return newObj;
};

console.log(createObj(str2));
