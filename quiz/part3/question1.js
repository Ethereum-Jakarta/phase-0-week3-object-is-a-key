function changeMe(arr) {
  // you can only write your code here!
  const currentYear = 2023;
  for(let i = 0; i < arr.length; i++) {
    const person = arr[i];
    const firstName = person[0];
    const lastName = person[1];
    const gender = person[2];
    const birthYear = person[3]

    let age = 'invalid birth year';
    if(birthYear && typeof birthYear === 'number' && birthYear <= currentYear) {
        age = currentYear - birthYear;
    }

    console.log(`${i + 1}. ${firstName} ${lastName}:`);

    console.log({
        firstName,
        lastName,
        gender,
        age
      });
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]); //

changeMe([])