function graduates(students) {
  let result = {};

  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let kelas = student.class;

    result[kelas] = [];
  }

  if (student.score > 75) {
    result[kelas].push({
      name: student.name,
      score: student.score,
    });
  }
}

return result;

console.log(
  graduates([
    { name: "Dimitri", score: 90, class: "foxes" },
    { name: "Alexei", score: 85, class: "wolves" },
    { name: "Sergei", score: 74, class: "foxes" },
    { name: "Anastasia", score: 78, class: "wolves" },
  ])
);

console.log(
  graduates([
    { name: "Alexander", score: 100, class: "foxes" },
    { name: "Alisa", score: 76, class: "wolves" },
    { name: "Vladimir", score: 92, class: "foxes" },
    { name: "Albert", score: 71, class: "wolves" },
    { name: "Viktor", score: 80, class: "tigers" },
  ])
);

console.log(graduates([]));
