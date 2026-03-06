function highestScore (students) {
   let hasil = {};//buat variabel hasil yang akan direturn
   if (students.length == 0) return hasil; //jika array kosong
   
   for (let i of students) {//looping array
      const kelas = i.class;
      
      //jika belum ada key dengan class tertentu
      if (!hasil[kelas]) {
         hasil[kelas] = {
            name: i.name,
            score: i.score
         };
      }
      //jika ada key yang sama dengan score lebih tinggi
      else if (i.score > hasil[kelas].score) {
         hasil[kelas] = {
            name: i.name,
            score: i.score
         }
      }
   }
   
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

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}