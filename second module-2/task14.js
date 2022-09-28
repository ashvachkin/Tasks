//Реализуйте функцию, котора параметром принимает строку. Выведите сформированный объект из параметров строки браузера.

const str = "https://underscorejs.org?";
const str2 = "https://underscorejs.org?id=123&limit=5&offset=a";
const createObj = (str) => {
  const newObj = {};
  let firstSplit = str.split("?");
  if (!firstSplit[1]) {
    return {};
  }
  let secondSplit = firstSplit[1].split("&");
  for (let i = 0; i < secondSplit.length; i++) {
    let thirdSplit = secondSplit[i].split("=");
    newObj[thirdSplit[0]] = thirdSplit[1];
  }
  return newObj;
};

console.log(createObj(str2));
