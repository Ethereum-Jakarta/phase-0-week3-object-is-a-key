function highestScore(students) {
  // Code disini
  let result = {};

  for (let i = 0; i < students.length; i++) {
    const currentStudent = {
      name: students[i].name,
      score: students[i].score,
    };

    if (!result[students[i].class]) {
      result[students[i].class] = currentStudent;
    } else {
      if (result[students[i].class].score < students[i].score) {
        result[students[i].class] = currentStudent;
      }
    }
  }
  return result;
}

// TEST CASE
console.log(
  highestScore([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes",
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves",
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes",
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves",
    },
  ])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
    {
      name: "Alexander",
      score: 100,
      class: "foxes",
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves",
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes",
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves",
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers",
    },
  ])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
