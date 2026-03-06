function highestScore(students) {
    // Code disini
    let graduate = {};
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.score >= 75) {
            graduate = {
                ...graduate,
                [student.class]: {}
            }
        }
    }

    for (let i = 0; i < Object.keys(graduate).length; i++) {
        const element = Object.keys(graduate)[i];
        for (let j = 0; j < students.length; j++) {
            const student = students[j];
            
            if (student.class === element) {
                
                if(Object.keys(graduate[element]).length === 0) {
                    graduate[element] = { name: student.name, score: student.score }
                }
                if(student.score >= graduate[element].score) {
                    graduate[element] = { name: student.name, score: student.score }
                }
            }
        }
    }
    return graduate
    
}

// TEST CASE
console.log(highestScore([
    
    {
        name: 'Stepen',
        score: 55,
        class: 'foxes'
    },
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