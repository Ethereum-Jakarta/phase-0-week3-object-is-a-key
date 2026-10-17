/*
1. Destructure object `{ x: 10, y: 20, z: 30 }` dan ambil cuma `x` dan `z`
2. Pakai spread buat merge `{ a: 1, b: 2 }` dan `{ b: 3, c: 4 }` — apa nilai `b`?
3. Bikin fungsi `ambilPertama(arr)` yang return `{ first, rest }` pakai destructuring
4. Swap dua variabel tanpa variabel temporary
*/
let problem1 = { x: 10, y: 20, z: 30 };
console.log(`ambil x: ${problem1.x}, ambil y: ${problem1.y}`);
let pertama = {a:1, b:2};
let kedua = {b:3, c:4};
let gabung = {...pertama,...kedua};
console.log(gabung); //b jadi 3
function ambilPertama(arr){
    let {pertama, ...kedua} = arr;
    return pertama;

}
//[x,y] = [y,x];
let data = {1: 'bagus', 2: 'jelek'};
console.log(data[1])