function changeMe(arr) {
  if (arr.length === 0) {
    console.log('""');
    return;
  }

  const currentYear = 2023;

  for (let i = 0; i < arr.length; i++) {
    let person = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: arr[i][3] ? currentYear - arr[i][3] : "Invalid Birth Year",
    };

    console.log(`${i + 1}. ${person.firstName} ${person.lastName}:`);
    console.log(person);
  }
}

changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);

changeMe([]);
