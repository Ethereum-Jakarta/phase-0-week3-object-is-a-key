function changeMe(arr) {
  // you can only write your code here!
  arr.forEach((data) => {
    console.log(`${data[0]} ${data[1]}: {
        firstName: ${data[0]}, lasName: ${data[1]}, gender: ${data[2]}, age: ${
      !data[3] ? "Invalid Birth Year" : 2025 - data[3]
    }}`);
  });
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);

// 1. Christ Evans:

// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 }
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

//intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

// const data = [
//   {
//     ChristEvans: {
//       firstName: "Christ",
//       lastName: "Evans",
//       gender: "Male",
//       age: 41,
//     },
//   },
//   {
//     RobertDowney: {
//       firstName: "Robert",
//       lastName: "Downey",
//       gender: "Male",
//       age: "Invalid Birth Year",
//     },
//   },
// ];

// console.log(data[1]);
