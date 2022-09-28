//Даны две строки. Сравнить строки. Вывести символы большей строки, на количество которых отличается.

const str = "123456111111111111";
const str2 = "1234567891";

const compareStr = (str1, str2) => {
  deletedElements = [];
  console.log(str.length, str2.length);
  if (str.length > str2.length) {
    for (let i = str2.length; i < str1.length; i++) {
      deletedElements.push(str1[i]);
    }

    console.log("first is bigger");
  } else {
    for (let i = str1.length; i < str2.length; i++) {
      console.log(str2.length - str.length);
      deletedElements.push(str2[i]);
    }
    console.log("second is bigger");
  }
  return deletedElements;
};

console.log(compareStr(str, str2));
