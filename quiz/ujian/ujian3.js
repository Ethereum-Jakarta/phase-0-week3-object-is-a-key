function highestScore(students) {
    // Code disini
    bestObj = {};
    students.forEach(studentDataObj => {
        if (!bestObj.hasOwnProperty(studentDataObj.class || bestObj[studentDataObj.class].score < studentDataObj.score)){
            bestObj[studentDataObj.class] = {'name': studentDataObj.name, 'score': studentDataObj.score};
        }
    })
    return bestObj;
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
