function highestScore(students) {
  // Code disini
  let result = {};

  for (let i = 0; i < students.length; i++) {
    const { name, score, class: className } = students[i];

    if (!result[className] || result[className].score < score) {
      result[className] = { name, score };
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

console.log(highestScore([])); //{}