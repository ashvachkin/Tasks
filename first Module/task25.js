//Написать функцию, принимающую на вход строку, написанную в стиле snake_case и возвращающую эту же строку, но уже в стиле camelCase.

const str = "find_and_replace_element_of_array";

const toCamelCase = (str) => {
  let splitedStr = str.split("_");
  let camelStr = splitedStr.reduce(
    (a, b) => a + b.charAt(0).toUpperCase() + b.slice(1)
  );
  console.log(camelStr);
};

toCamelCase(str);
