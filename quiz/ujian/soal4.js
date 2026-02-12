/*
Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

Student dapat dinyatakan lulus apabila score lebih besar dari 75.
Masukkan name dan score dari student ke class yang dia ikuti.
Student yang tidak lulus tidak perlu ditampilkan.
Output yang diharapkan berupa Object dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}
*/

function graduates(students) {
  // Code disini
  // pengondisian untuk mengetahui apakah student memiliki data atau tidak
  if (students.length === 0) {
    return {};
  }

  // membuat variabel penampung hasil
  const result = {};

  // membuat looping yang digunakan untuk mengidentifikasi student yang lulus
  for (let i = 0; i < students.length; i++) {
    //mengambil semua data yng dibutuhkan
    const nama = students[i].name;
    const score = students[i].score;
    const classs = students[i].class;

    // jika student lulus maka masukkan data ke dalam object
    if (score > 75) {
      // jika class belum ada
      if (!result[classs]) {
        // maka tambahkan array class dengan data student yang lulus
        result[classs] = [
          {
            name: nama,
            score: score,
          },
        ];
      }
      //jika class sudah ada
      else if (result[classs]) {
        // maka tambahkan data baru student yang lulus ke dalam array class tersebut
        result[classs].push({
          name: nama,
          score: score,
        });
      }
    }
  }

  return result;
}

console.log(
  graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(
  graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])); //{}
