function graduates(students) {
  let result = {}; // Objek untuk menyimpan hasil

  for (let i = 0; i < students.length; i++) {
    let student = students[i];

    // Cek apakah score lebih dari 75
    if (student.score > 75) {
      // Jika class belum ada di result, buat array kosong
      if (!result[student.class]) {
        result[student.class] = [];
      }

      // Masukkan data student yang lulus ke dalam class-nya
      result[student.class].push({
        name: student.name,
        score: student.score,
      });
    }
  }

  return result;
}

// TEST CASES
console.log(
  graduates([
    { name: "Dimitri", score: 90, class: "foxes" },
    { name: "Alexei", score: 85, class: "wolves" },
    { name: "Sergei", score: 74, class: "foxes" },
    { name: "Anastasia", score: 78, class: "wolves" },
  ])
);

// Expected Output:
// {
//   foxes: [ { name: 'Dimitri', score: 90 } ],
//   wolves: [ { name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 } ]
// }

console.log(
  graduates([
    { name: "Alexander", score: 100, class: "foxes" },
    { name: "Alisa", score: 76, class: "wolves" },
    { name: "Vladimir", score: 92, class: "foxes" },
    { name: "Albert", score: 71, class: "wolves" },
    { name: "Viktor", score: 80, class: "tigers" },
  ])
);

// Expected Output:
// {
//   foxes: [ { name: 'Alexander', score: 100 }, { name: 'Vladimir', score: 92 } ],
//   wolves: [ { name: 'Alisa', score: 76 } ],
//   tigers: [ { name: 'Viktor', score: 80 } ]
// }

console.log(graduates([])); // Expected Output: {}
