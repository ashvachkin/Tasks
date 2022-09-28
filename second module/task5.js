//Дана строка. Разделите строку на фрагменты по три подряд идущих символа.
//В каждом фрагменте средний символ заменить на случайный символ, не совпадающий ни с одним из символов этого фрагмента, например, нижнее подчеркивание (_). Показать фрагменты, упорядоченные по алфавиту.

let str = "asdasd  ad   sdw qweqwe";
const changeSymbols = (str) => {
  str = str.split(" ");
  str = str.join("");
  let arr = [];
  for (let i = 0; i < str.length; i = i + 3) {
    const slicedStr = str.slice(i, i + 3);
    let separator =
      slicedStr[0] !== "_" && slicedStr[2] !== "_"
        ? "_"
        : slicedStr[0] !== "+" && slicedStr[2] !== "+"
        ? "+"
        : "-";
    arr.push(slicedStr[0] + separator + (slicedStr[2] || ""));
  }
  return arr;
};

console.log(changeSymbols(str));
