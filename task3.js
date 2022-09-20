const arr = ["3", "q", "123", "bv", "dd"];

const alertString = (arr) => {
  while (arr.length) {
    console.log(arr.pop());
  }
};

alertString(arr);
