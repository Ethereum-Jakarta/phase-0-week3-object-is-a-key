function highestScore (students) {
  let res ={}
  for (let i = 0; i < students.length; i++) {
    let cls = students[i].class 
    let score = students[i].score 
    let name = students[i].name
    if (!res[cls]) {
        res[cls]={name:'',score:0}
    }
    if (score>res[cls].score) {
       res[cls]={name:name,score:score}
    }
  }
  return res
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