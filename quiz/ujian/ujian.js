function deepSum(arr) {
  if (!arr || arr.length === 0) {
    return 'No number';
  }
  
  let sum = 0;
  
  for (let subArr of arr) {
    for (let subSubArr of subArr) {
      for (let num of subSubArr) {
        sum += num;
      }
    }
  }
  
  return sum;
}

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
]));

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

console.log(deepSum([]));

function naikAngkot(arrPenumpang) {
  const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  if (arrPenumpang.length === 0) {
    return [];
  }
  
  return arrPenumpang.map(passenger => {
    const nama = passenger[0];
    const naikDari = passenger[1];
    const tujuan = passenger[2];
    
    const idxNaik = rute.indexOf(naikDari);
    const idxTujuan = rute.indexOf(tujuan);
    const jarak = Math.abs(idxTujuan - idxNaik);
    const biaya = jarak * 2000;
    
    return {
      penumpang: nama,
      naikDari: naikDari,
      tujuan: tujuan,
      bayar: biaya
    };
  });
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([]));

function highestScore(students) {
  if (students.length === 0) {
    return {};
  }
  
  const classes = {};
  
  for (let student of students) {
    const className = student.class;
    
    if (!classes[className]) {
      classes[className] = { name: student.name, score: student.score };
    } else if (student.score > classes[className].score) {
      classes[className] = { name: student.name, score: student.score };
    }
  }
  
  return classes;
}

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

console.log(highestScore([]));

function graduates(students) {
  if (students.length === 0) {
    return {};
  }
  
  const result = {};
  
  for (let student of students) {
    const className = student.class;
    
    if (student.score > 75) {
      if (!result[className]) {
        result[className] = [];
      }
      result[className].push({
        name: student.name,
        score: student.score
      });
    }
  }
  
  const allClasses = [...new Set(students.map(s => s.class))];
  for (let cls of allClasses) {
    if (!result[cls]) {
      result[cls] = [];
    }
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

console.log(graduates([]));
