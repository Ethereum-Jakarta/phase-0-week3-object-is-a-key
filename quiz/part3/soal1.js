function changeMe(arr) {
  // Jika array kosong, tampilkan string kosong
  if (arr.length === 0) {
    console.log("");
    return;
  }

  // Menggunakan tahun saat ini (bisa juga diset ke 2023 sesuai contoh)
  let currentYear = new Date().getFullYear();

  for (let i = 0; i < arr.length; i++) {
    let personArr = arr[i];
    let firstName = personArr[0];
    let lastName = personArr[1];
    let gender = personArr[2];
    let birthYear = personArr[3];

    // Menghitung age jika birthYear tersedia dan valid, jika tidak set ke 'Invalid Birth Year'
    let age =
      birthYear && birthYear <= currentYear
        ? currentYear - birthYear
        : "Invalid Birth Year";

    let personObj = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      age: age,
    };

    console.log(`${i + 1}. ${firstName} ${lastName}:`);
    console.log(personObj);
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);

changeMe([]);
