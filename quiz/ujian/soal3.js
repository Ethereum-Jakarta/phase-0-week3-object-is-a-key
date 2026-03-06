

function highestScore(students) {
  var classList = ['foxes', 'wolves', 'tigers']
  // let high ={};
  let highest = {};

  for (let i = 0; i < classList.length; i++) {
    let scoreHigh = -Infinity;
    let student = null;

    for (let j = 0; j < students.length; j++) {
      if (classList[i] === students[j].class) {
        if (students[j].score > scoreHigh) {
          scoreHigh = students[j].score;
          student = students[j];
        }
      }
    }
    if (student){
      highest[classList[i]] = {
        name: student.name,
        score: student.score
      }
    }
  }

  return highest;
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