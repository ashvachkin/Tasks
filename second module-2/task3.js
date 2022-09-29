//Функция принимает в качестве параметра строку. Если она начинается на 'abc', то заменить их на 'www', иначе добавить в конец строки 'zzz'.

const str = "abdd ddd ddd d";

const changeStr = (str) => {
  let splitedStr = str.split("");
  if (str.slice(0, 3) === "abc") {
    splitedStr.splice(0, 3, "www");
    return result;
  } else {
    splitedStr.push("zzz");
  }
  let result = splitedStr.join("");
  return result;
};

console.log(changeStr(str));
