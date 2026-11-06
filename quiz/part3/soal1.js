function changeMe(arr) {
    // you can only write your code here!
    let data = arr;

    let umur = "";
    let properti = ["firstName", "lastName", "gender"];
    let hasil = {};

    if(data.length == 0){
        return '""';
    } else {

        
        for(let i = 0; i < data.length; i++){
            let namaObjek = data[i][0] + " " + data[i][1];
            hasil[namaObjek] = {};
            
            for(let j = 0; j < 3; j++){
                hasil[namaObjek][properti[j]] = data[i][j];
            }
            
            if(data[i][3] === undefined){
                umur = "Invalid Birth Year"
                hasil[namaObjek]["age"] = umur;
            } else {
                umur = 2026 - data[i][3];
                hasil[namaObjek]["age"] = umur;
            }
        }
    }

    return hasil;
}

// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

//intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

console.log(changeMe([]));// ""