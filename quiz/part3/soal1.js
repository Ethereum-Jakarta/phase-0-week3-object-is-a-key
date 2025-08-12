function changeMe(arr) {
  // mengidentifikasi apakah arr kosomng apa tidak
  if (arr.length == 0) {
    console.log('""');
    return;
  }

  //mendeklarasikan tahun saat ini untuk identifikasi umur
  const tahun = new Date().getFullYear();

  //mengecek setiap data di dalam array yang diberikan dan mengelompokan ke dalam objek sementara
  for (let i = 0; i < arr.length; i++) {
    //membuat objek penampung
    const dataOrang = {};

    //menambahkan key dan value (dari arr) ke dalam objek
    dataOrang.firstName = arr[i][0];
    dataOrang.lastName = arr[i][1];
    dataOrang.gender = arr[i][2];

    //mengidentifikasi age
    if (arr[i][3] !== undefined && typeof arr[i][3] == "number") {
      dataOrang.age = tahun - arr[i][3];
    } else {
      dataOrang.age = "yang bener dong bang kalo kasih input";
    }

    // bentuk judulnya
    const judul = `${i + 1}. ${dataOrang.firstName} ${dataOrang.lastName} :`;

    // cetak ke konsol
    console.log(judul);
    console.log(dataOrang);
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

//intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

changeMe([]); // ""
