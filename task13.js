const arr = ["str", 123, "123", true, null, {}, 2];

const checkType = (arr) => {
  arr.forEach((item) => console.log(typeof item));
};

console.log(checkType(arr));
