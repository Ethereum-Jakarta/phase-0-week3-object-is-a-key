function highestScore(students) {
    // Code disini
    let result = {};                // tempat menyimpan hasil
    if (students.length == 0) {     // jika data kosong maka langsung kembalikan hasil
        return result;
    }

    for (let i = 0; i < students.length; i++) {     // loop untuk akses ke satu per satu murid
        let murid = students[i];

        if (!result[murid.class]) {                                         // jika class murid belum ada di hasil maka tambahkan data
            result[murid.class] = { name: murid.name, score: murid.score }
        } else {                                                            // jika sudah ada data class maka bandingkan score nya
            if (students.score > result[murid.class].score) {
                result[murid.class] = { name: murid.name, score: murid.score }
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

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}