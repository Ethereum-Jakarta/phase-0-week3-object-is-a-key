
function graduates(students) {
    let obj = {};
    for (let i = 0; i < students.length; i++) {
        let className = students[i].class;

        if (students[i].score > 75) {
            if (!obj[className] || students[i].score > obj[className].score) {
                obj[className] = []
            } 
            obj[className].push({
                name: students[i].name,
                score: students[i].score
            })
            obj[className].sort((a, b) => b.score - a.score)
        }
    }

    if (students.length === 0) return {}
    return obj
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

  
  console.log(graduates([])); //{}
  