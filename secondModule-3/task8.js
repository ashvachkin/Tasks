//Реализуйте функцию, которая параметром принимает объект. Выведите сформированную строку для браузера ('https://underscorejs.org') с параметрами.
//Например, { a: 4, b: 8 } => "https://underscorejs.org?a=4&b=8".

let str = "https://docs.google.com";
const data = { id: "terd", limit: 5, offset: 0 };

const createStr = (str, data) => {
  let result = str;
  if (Object.entries(data).length === 0) {
    return result;
  } else result += "?";
  for (key in data) {
    result += key + "=" + data[key] + "&";
  }
  return result.slice(0, -1);
};

console.log(createStr(str, data));
