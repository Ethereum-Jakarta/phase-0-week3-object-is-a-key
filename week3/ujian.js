// # Last Logic Challenge Minggu 3 | Ujian

// ## Soal 1
// ```js
// /*
// Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array
// */

function deepSum (arr) {
    let perubahanArr = arr.flat().flat()
    let tambahArr = perubahanArr.reduce((acc, current) => acc + current, 0)
    if(tambahArr === 0){
        return 'No Number'
    } else {
        return tambahArr
    }
}

// TEST CASE
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
// ```

// ## Soal 2
// ```js
// /*
// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
// Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
// */

function naikAngkot(arrPenumpang) {
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  let penumpang = []
    for(i = 0; i < arrPenumpang.length; i++){
      penumpang.push(arrPenumpang[i][0])
    }
  let naikDari = [];
    for(j = 0; j < arrPenumpang.length; j++){
      naikDari.push(arrPenumpang[j][1])
    }
  let tujuan = []
    for(k = 0; k < arrPenumpang.length; k++){
        tujuan.push(arrPenumpang[k][2])
      }
  let cekNaikDari = []
  let cekTujuan = []
    for(l = 0; l < arrPenumpang.length; l++){
      cekNaikDari.push(rute.indexOf(naikDari[l]) * 2000)
      cekTujuan.push(rute.indexOf(tujuan[l]) * 2000)
    }
  let bayar = []
  for(m = 0; m < arrPenumpang.length; m++){
    bayar.push(cekTujuan[m] - cekNaikDari[m])
  }
  let hasilAkhir = []
    for(n = 0; n < arrPenumpang.length; n++){
      hasilAkhir.push({penumpang: penumpang[n], naikDari: naikDari[n], tujuan: tujuan[n], bayar: bayar[n]})
  }
  return hasilAkhir
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
// ```

// ## Soal 3
// ```js
function highestScore (students) {
  let divFoxes = [];
  let divWolves = [];
  let divTigers = [];
  for(i = 0; i < students.length; i++){
    if(students[i].class === 'foxes'){
      divFoxes.push(students[i]);
    } else if(students[i].class === 'wolves'){
      divWolves.push(students[i]);
    } else if(students[i].class === 'tigers'){
      divTigers.push(students[i]);
    }
  }
  let maxFoxes = divFoxes.sort((a, b) => b.score - b.score);
  let maxWolves = divWolves.sort((a, b) => b.score - b.score);
  let maxTigers = divTigers.sort((a, b) => b.score - b.score);
  let takeAll = [maxFoxes[0], maxWolves[0], maxTigers[0]];
  let sortClass = [];
  let divAvaible = []
  for(j = 0; j < takeAll.length; j++){
    if(!takeAll[j]){
    } else {
      sortClass.push(takeAll[j].class);
      divAvaible.push(takeAll[j])
    }
  }
  for(k = 0; k < sortClass.length; k++){
    delete divAvaible[k].class
  }
  let result = []
  for(l = 0; l < sortClass.length; l++){
    result[sortClass[l]] = divAvaible[l]
  }

  return result
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
// ```

// ## Soal 4
// ```js
// /*
// Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

// Student dapat dinyatakan lulus apabila score lebih besar dari 75.
// Masukkan name dan score dari student ke class yang dia ikuti.
// Student yang tidak lulus tidak perlu ditampilkan.
// Output yang diharapkan berupa Object dengan format sebagai berikut:

// {
//   <class>: [
//     { name: <name>, score: <score> },
//     ...
//   ],
//   <class>: [
//     { name: <name>, score: <score> },
//     ...
//   ],
//   <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
// }
// */

function graduates (students) {
  let check = [];
  for(i = 0; i < students.length; i++){
    if(students[i].score > 75){
      check.push(students[i]);
    }
  }
  let foxes = []
  let wolves = []
  let tigers = []
  for(j = 0; j < check.length; j++){
    if(check[j].class === 'foxes'){
      foxes.push(check[j]);
    } else if(check[j].class === 'wolves'){ 
      wolves.push(check[j]);
    } else if(check[j].class === 'tigers'){
      tigers.push(check[j]);
    }
  }
  let result = {
    foxes: [],
    wolves: [],
    tigers: []
  }
  for(k = 0; k < check.length; k++){
    let checkClass = check[k].class
    let data = {
      name: check[k].name,
      score: check[k].score
    }
    if(checkClass === 'foxes'){
      result.foxes.push(data)
    } else if(checkClass === 'wolves'){
      result.wolves.push(data)
    } else if(checkClass === 'tigers'){
      result.tigers.push(data)
    }
  } 

  return result
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

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }


// console.log(graduates([])); //{}
// ```