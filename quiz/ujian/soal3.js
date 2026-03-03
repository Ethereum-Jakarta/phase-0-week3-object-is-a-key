// Soal 3

/* ==== ALGORITMA ====
1. Buat array kososng bernama result, seperti namanya fungisnya untuk menyimpan object dengan skor tertinggi dari setiap calss
2. buat for loop untuk memriksa array student dari awal sampai ujung 
3. simpan semua value yang ada di array of object kedalam variable
4. gunakan pengkondisian if dan else if untuk memeriksa apakh properti atau key nama kelas tertentu itu sudah ada atau tidak didalam object result, jika belum ada inisialisasi properti ndengan nama kelas tertentu dan tambahkan valuennya seperti score dan nama studentnya. JIka ternyata key atau propertinya sudah ada didalam object result maka tingal tambahkan saja data atau valunya kedalam properti tersebut.
5. return object result dluar atau saat loop selesai.
*/


function highestScore (students) {
  // Code disini
    let result = {};

    for(let i = 0; i < students.length; i++) {

        let {name, score, class:namaClass} = students[i];

        if(!result[namaClass] || score > result[namaClass].score) {
            result[namaClass] = {name: name, score: score};
        }
    }
    return result;

}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
