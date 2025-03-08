function highestScore(students) {
    let result = {}; 
    
    for (let i = 0; i < students.length; i++) {
        let student = students[i]; 
        let kelas = student.class; 
        let skor = student.score; 
        
        if (!result[kelas] || skor > result[kelas].score) {
            result[kelas] = {
                name: student.name,
                score: skor
            };
        }
    }
    
    return result;
}

// TEST CASES
console.log(highestScore([
    { name: 'Dimitri', score: 90, class: 'foxes' },
    { name: 'Alexei', score: 85, class: 'wolves' },
    { name: 'Sergei', score: 74, class: 'foxes' },
    { name: 'Anastasia', score: 78, class: 'wolves' }
]));

// Expected Output:
// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([
    { name: 'Alexander', score: 100, class: 'foxes' },
    { name: 'Alisa', score: 76, class: 'wolves' },
    { name: 'Vladimir', score: 92, class: 'foxes' },
    { name: 'Albert', score: 71, class: 'wolves' },
    { name: 'Viktor', score: 80, class: 'tigers' }
]));

// Expected Output:
// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); // Expected Output: {}
