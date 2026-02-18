function highestScore (students) {
  // Code disini
  let kelas = [];

  for (let i = 0; i < students.length; i++) {
    if (i === 0) {
      kelas.push(students[i].class);
    }
    for (let j = 0; j <= kelas.length; j++) {
      if (students[i].class === kelas[j]) {
        break;
      } 
      if (j === kelas.length - 1) {
        kelas.push(students[i].class);
      }
    }
  }

  let data = {};
  for (let i = 0; i < kelas.length; i++) {
    let terbesar = 0;
    let tertinggi;
    for (let j = 0; j < students.length; j++) {
      if (students[j].class === kelas[i]) {
        if (terbesar < students[j].score) {
          terbesar = students[j].score;
          tertinggi = students[j];
        }
      }
    }

    data[kelas[i]] = {
      name: tertinggi.name,
      score: tertinggi.score
    };
  }
  return data;
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