// ==========
// SOAL 1
// ==========
let data = {
    x: 10,
    y: 20,
    z: 30
};

let {x,y,z} = data;
console.log(x,z);
console.log();
// ========================================================


// ==========
// SOAL 2
// ==========
let awal = {
    a: 1,
    b: 2
};

let akhir = {
    b: 3,
    c: 4
};

let gabung = {...awal,...akhir};
console.log(gabung);
console.log();
// ========================================================


// ==========
// SOAL 3
// ==========
function ambilPertama(arr){
    let [satu, ...sisa] = arr;
    return {satu, sisa};
}
let arr = [1,2,3,4,5]
console.log(ambilPertama(arr));
// ========================================================


// ==========
// SOAL 3
// ==========
let i = 10;
let j = 50;

[i,j] = [j,i];
console.log(i);
console.log(j);
// ========================================================