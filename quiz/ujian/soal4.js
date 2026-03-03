// Soal 4

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

/* ==== ALGORITMA ====
1. Buat object kosong bernama result
2. Buat for loop untuk memriksa input student dari awal hingga akhir
3. gunakan pengkondisian if untuk cek jika score student dibawah atau sama dengan 75 maka abaikan valuenya dan lanjutkan ke loop selanjutnya
4. gunakan lagi pengkondisian if untuk memastikan jika object result belum memiliki key sesuai dengan nama class maka buat array kososng dan taruh kedalam object result
5. masukan seluruh data student kedalam array of object yang ada didalam result karena sudah pasti data yang adalah >75
6. return object result di luar loop.

*/

function graduates (students) {
  // Code disini
  let result = {};

  for(let i = 0; i < students.length; i++) {
    let {name, score, class: namaClass} = students[i];

    if(score <= 75) continue;

    if(!result[namaClass]) {
        result[namaClass]  =[];
    } 

    result[namaClass].push({name, score});
  }

  return result;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

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
