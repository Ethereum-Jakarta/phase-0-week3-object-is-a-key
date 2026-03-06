// var number = function (array) {
//   //your awesome code here
//   let data = [];
//   for (let i = 0; i < array.length; i++) {
//     data.push(`${i + 1}: ${array[i]}`);
//   }
//   return data;
// };

// console.log(number(["a", "b", "c"]));
// console.log(number([]));

// function basicOp(operation, value1, value2) {
//   //Code
//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "/") {
//     return value1 / value2;
//   }
// }

// console.log(basicOp("+", 5, 3));

// function stringToArray(string) {
//   // code code code
//   let text = string.split(" ");
//   return text;
// }

// console.log(stringToArray("i love you baby"));

// //44,6
// function grow(x) {
//   let number = 1;
//   for (let i = 0; i < x.length; i++) {
//     number *= x[i];
//   }
//   return number;
// }
// console.log(grow([1, 2, 3, 4]));

// function numberToString(num) {
//   // Return a string of the number here!
//   return num.toString();
// }

// console.log(numberToString(7));

// function friend(friends) {
//   //your code here
//   return friends.filter((four) => four.length === 6);
// }

// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

// const filterNama = (name) => {
//   return name.filter((cek) => cek.length === 5);
// };

// console.log(filterNama(["ega", "sigra", "maulana", "muhammad"]));

// function findSmallestInt(arr) {
//   // your code here
//   let small = arr.sort((a, b) => a - b);
//   return small[0];

//   return Math.min(...arr);
// }

// console.log(findSmallestInt([34, -345, -1, 100]));
// console.log(findSmallestInt([34, 15, 88, 2]));

function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// => returns "(123) 456-7890"

function booleanToString(b) {
  //your code here
  if (b) {
    return true;
  } else {
    return false;
  }
}

console.log(
  booleanToString(true),
  "true",
  'When we pass in true, we want the string "true" as output'
);
console.log(
  booleanToString(false),
  "false",
  'When we pass in false, we want the string "false" as output'
);
