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
  const result = students.reduce((kelas, student) => {
    const key = student["classes"];
    const { name, score } = student;
    if (!kelas[key]) {
      kelas[key] = [];
    }
    if (score > 75) {
      kelas[key].push({ name, score });
    }
    return kelas;
  }, {});
  return result;
}

console.log(
  graduates([
    {
      name: "Dimitri",
      score: 90,
      classes: "foxes",
    },
    {
      name: "Alexei",
      score: 85,
      classes: "wolves",
    },
    {
      name: "Sergei",
      score: 74,
      classes: "foxes",
    },
    {
      name: "Anastasia",
      score: 78,
      classes: "wolves",
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
      classes: "foxes",
    },
    {
      name: "Alisa",
      score: 76,
      classes: "wolves",
    },
    {
      name: "Vladimir",
      score: 92,
      classes: "foxes",
    },
    {
      name: "Albert",
      score: 71,
      classes: "wolves",
    },
    {
      name: "Viktor",
      score: 80,
      classes: "tigers",
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
