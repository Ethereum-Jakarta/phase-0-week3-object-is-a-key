function highestScore(students) {
  // Code disini
  // identifikasi apakah objek yang diberikan kosong atau tidak
  if (students.length === 0) {
    return {};
  }

  // membuat variabel objek penamapung
  const hasil = {};

  // membuat perulangan yang digunakan untuk mengiterasi objek students ke dalam hasil
  for (let i = 0; i < students.length; i++) {
    // mengambil setiap nilai yang dibutuhkan
    const kelas = students[i].class;
    const nilai = students[i].score;
    const nama = students[i].name;

    // pengondisian
    // apabila kelas yang dibutuhkan sudah ada maka bandingkan value score baru dengan value score yang lama
    if (hasil[kelas]) {
      // apa bila leboh besar nilai yang baru maka perbarui nilainya
      if (nilai > hasil.score) {
        hasil[kelas].name = nama;
        hasil[kelas].score = nilai;
      }
      //apabila kelas belum ada maka tambahkan key yang dibutuhkan dengan nilainya yang sudah diambil dari objek students
    } else {
      hasil[kelas] = {
        name: nama,
        score: nilai,
      };
    }
  }

  return hasil;
}

// TEST CASE
console.log(
  highestScore([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes",
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves",
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes",
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves",
    },
  ])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
    {
      name: "Alexander",
      score: 100,
      class: "foxes",
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves",
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes",
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves",
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers",
    },
  ])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
