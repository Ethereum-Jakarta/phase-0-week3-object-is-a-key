function highestScore (students) {
    // Code disini
    if(students === undefined || students.length === 0) {
      return {};
    }

    let result = {};
    for(let data of students) {

      if(!result[data.class]) {
        result[data.class] = {name: data.name, score: data.score};
      } else {
        if(data.score > result[data.class].score) {
        result[data.class].name = data.name;
        result[data.class].score = data.score;
        }
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
  
  // // {
  // //   foxes: { name: 'Alexander', score: 100 },
  // //   wolves: { name: 'Alisa', score: 76 },
  // //   tigers: { name: 'Viktor', score: 80 }
  // // }
  
  
  console.log(highestScore([])); //{}