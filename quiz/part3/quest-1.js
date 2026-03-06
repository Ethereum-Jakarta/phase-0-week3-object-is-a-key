

function changeMe(arr) {
    const date = new Date();
    const getYear = date.getFullYear();
    arr.map((item) => {
        let age = getYear - item[3];
        if (!item[3]) {
            age = "Invalid Birth Year"
        }
        console.log(`
            ${item[0]} ${item[1]}: {
                firstName: '${item[0]}',
                lastName: '${item[1]}',
                gender: '${item[2]}',
                age: '${age}'
            },`
        )
    })
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);