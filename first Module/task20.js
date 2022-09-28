//Написать функцию, которая принимает на вход URL, например https://www.google.com/doodles/rubiks-cube, и возвращает объект вида:

// {

//     protocol: “http”,

//     hostname: “www.google.com”,

//     child: {

//      path: “doodles”

//      child: {

//       rubiks-cube

//      }

//     }

//    }

//    URL может быть любой длины, но формат всегда будет {protocol}://{hostname}/path/path/…/path

const urlAdress = "https://www.google.com/doodles/rubiks-cube/ASD/ASD/ASD/ASD/ASD/ASD/AS/DA/SD/DA";
const splitUrl = (adress) => {
  let protocolSplit = adress.split("://");
  let fullSplit = protocolSplit[1].split("/");

  const createNestedObj = (index = 1) => {
    if (index < fullSplit.length) {
      const temp = {
        path: fullSplit[index],
      };
      if (index + 1 < fullSplit.length) {
        temp.child = createNestedObj(index + 1);
        return temp;
      }
    }
  };

  let adressProperties = {
    protocol: protocolSplit[0],
    hostname: fullSplit[0],
    child: createNestedObj(),
  };
  return adressProperties;
};

console.log(splitUrl(urlAdress));
