/*

1. Dari`{ a: 10, b: 20, c: 30 }`, hitung total semua values pakai`Object.values()` + `reduce()`
2. Dari`{ js: 90, python: 85, go: 70, rust: 95 }`, filter bahasa dengan skor > 80 dan return sebagai object
3. Bikin fungsi `invertObject(obj)` yang menukar key ↔ value.Contoh: `{a: 1}` → `{1: "a"}`
4. Merge 3 object: `{a:1}`, `{b:2, a:10}`, `{c:3}` — apa hasil akhirnya ?
*/
let nomorSatu = { a: 10, b: 20, c: 30 }; // no1
let totalValue;
totalValue = Object.values(nomorSatu).reduce(function(total, h){
    return total+h;
})
console.log(totalValue)

let nilaiBahasa = { js: 90, python: 85, go: 70, rust: 95 }; //no2
let bahasaGood = Object.entries(nilaiBahasa).filter(function(entry){return entry[1] >80});
console.log(bahasaGood);



function invertObject(obj){ //no3
    let invertedObject = {};
    for(key in obj){
        invertedObject[obj[key]] = key;
    }
    return invertedObject;
}
console.log(invertObject({a:1, b:2, c:3}));



let obj1 = {a:1}; //no4
let obj2 = {b:2, a:10};
let obj3 = {c:3}
let mergedObj = Object.assign({}, obj1, obj2, obj3);
console.log(mergedObj);