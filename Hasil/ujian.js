function deepSum (arr) {
  if (arr.length === 0) {
    return 0
  }

  let total = 0
  for (let item of arr) { //untuk mengecek apakah object adalah array 
    if (Array.isArray(item)) {
        total += deepSum(item) 
    } else {
        total += item  
    }
  }
  return total
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
])); 

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  result = []
  
  for (let penumpang of arrPenumpang) {
    const nama = penumpang[0];
    const naik = penumpang[1];
    const tujuan= penumpang[2]; 
    
    const indexNaik = rute.indexOf(naik);
    const indexTujuan = rute.indexOf(tujuan); 
    const bayar = (indexTujuan - indexNaik) * 2000 

   const Obj = {
    penumpang : nama,
    naikDari : naik,
    tujuan : tujuan,
    bayar : bayar, 
   };

   result.push(Obj);
  }

  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([])); 

function highestScore (students) {
  const highest = {};

  for (const student of students) {
   const {name, score, class: className } = student;

   if (!highest[className] || score > highest[className].score) {
    highest[className] = {name, score}; 
   }
}
return highest;
}

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

function graduates (students) {
  const graduates = {}

  for (const student of students) {
    const { name, score, class : className } = student; 

    if (student.score > 75) {
      if (!graduates[className]) {
      graduates[className] = [] 
      }
      graduates[className].push({name, score})
    } 
   }
   return graduates
}

console.log(`\nTest Final`)
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