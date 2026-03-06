/*
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array
*/

function deepSum (arr) {
  // Code disini
  
   // Jika array kosong, kembalikan pesan
   if (arr.length === 0) {
    return 'No number';
  }

  // Variabel untuk menampung jumlah total
  let total = 0;

  // Looping level pertama (array terluar)
  for (let i = 0; i < arr.length; i++) {
    // Looping level kedua
    for (let j = 0; j < arr[i].length; j++) {
      // Looping level ketiga (array terdalam)
      for (let k = 0; k < arr[i][j].length; k++) {
        // Tambahkan setiap elemen ke total
        total = total + arr[i][j][k];
      }
    }
  }

  return total;
}

//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number

/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if (arrPenumpang.length == 0) {
    return []
  }

  let hasil = []

  // buat perulangan for each aja biar enak 
  arrPenumpang.forEach((a) => {
    let obj = {
      penumpang : a[0],
      narikDari : a[1],
      tujuan : a[2],
      bayar : 0
    }

    let ruteNarikDari = 0
    let tujuan = 0

    // buat perulangan di rute pakai for biasa aja 
    for (let i = 0; i < rute.length; i++) {
      // periksa jika objek naik dari apakah sama kalau sama simpen index nya 
      if (obj.narikDari == rute[i]) {
        // kalau sudah ketemu index nya simpen di varibel trus nantik di kurangi dan di kali 2000
        ruteNarikDari = i
      }
      if (obj.tujuan == rute[i]) {
        tujuan = i
      }
      let ongkos = (tujuan - ruteNarikDari) * 2000
      // kalau sudah masukkan di obj.yang properti nya bayar 
      obj.bayar = ongkos
    }
    

    // masukan objek di dalam aray hasil
    hasil.push(obj)
  });  


  return(hasil)
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

function highestScore (students) {
  // Code disini

  if (students.length == 0) {
    return []
  }

  let hasil = {}

  students.forEach(student => {
    let nama = student.name;
    let kelas = student.class;
    let skor = student.score;

    // Jika kelas belum ada di hasil, tambahkan siswa tersebut
    if (!hasil[kelas]) {
      hasil[kelas] = {
        name: nama,
        score: skor
      };
    } else {
      // Jika kelas sudah ada, periksa apakah skornya lebih tinggi
      if (skor > hasil[kelas].score) {
        hasil[kelas] = {
          name: nama,
          score: skor
        };
      }
    }
  });

  


  return hasil
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

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


console.log(highestScore([])); //{}

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
   // Menyimpan hasil dalam objek
   let result = {};

   // Iterasi melalui setiap siswa
   students.forEach(student => {
       let score = student.score;
       let clas = student.class;
       let name = student.name;

       // Periksa apakah siswa lulus
       if (score > 75) {
           // Jika kelas belum ada, inisialisasi array
           if (!result[clas]) {
               result[clas] = []; // Membuat array kosong jika kelas belum ada
           }

           // Tambahkan siswa yang lulus ke dalam kelas
           result[clas].push({
               name: name,
               score: score
           });
       }
   });

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
