function changeMe(arr) {
  // Jika array kosong, tampilkan string kosong
  if (arr.length === 0) {
    console.log('""');
    return;
  }

  // Iterasi setiap elemen dalam array
  for (let i = 0; i < arr.length; i++) {
    const firstName = arr[i][0];
    const lastName = arr[i][1];
    const gender = arr[i][2];
    const birthYear = arr[i][3];

    // Hitung usia atau tetapkan sebagai "Invalid Birth Year"
    let age;
    if (birthYear === undefined) {
      age = "Invalid Birth Year";
    } else {
      age = 2023 - birthYear;
    }

    // Buat objek hasil
    const person = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      age: age,
    };

    // Tampilkan output sesuai format
    console.log(`${firstName} ${lastName}:`, person);
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);
// Output:
// Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 41 }
// Robert Downey: { firstName: 'Robert', lastName: 'Downey', gender: 'Male', age: 'Invalid Birth Year' }

changeMe([]); // ""
