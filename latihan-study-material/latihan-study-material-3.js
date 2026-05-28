/*
    let Laptop = {
        nama : "Lenonux Hacks 580i",
        os : "parrot 13.4",
        harga : 123908000
    };

    console.log(Object.keys(Laptop)); // ambil semua key 
    console.log(Object.values(Laptop)); //ambil semua nilai / value

    // Case Mencari nilai tertinggi
    let nilaiSiswa = {
        Budi : 90,
        Andi : 92,
        Rosy : 82,
        Pode : 79,
        Rota : 86,
        Bimo : 82,
        Siti : 54,
        Yani : 79,
        Roya : 49,
        Bani : 81,
        Refi : 78,
        Roha : 62,
        Guha : 73,
        Taqu : 72
    };
    let nilaiTertinggi = Math.max(...Object.values(nilaiSiswa));
    console.log(nilaiTertinggi);

    // mengambil pasangan Key and value memakai .entries
    let pakeEntries = Object.entries(nilaiSiswa);
    console.log(pakeEntries);
    console.log("\n\n");

    let Menu = {
        nasiGoreng : 14900,
        gethukGoreng : 9000,
        leleBakar : 19200,
        gurameGoreng : 23500,
        sotoTeri : 15700,
        ayamKencot : 17000,
        mieUget : 14000
    };

    for (let [nama, harga] of Object.entries(Menu)) {
        console.log(`Nama ${nama}, Harga RP ${harga.toLocaleString("id-ID")}`)
    }

    //pake entries untuk ubah ke array lalu pake method .filter()
    let Remidi = Object.entries(nilaiSiswa)
        .filter(data => data[1] <= 80)
        .map(data => [...data, ["status", "Remidi"]]);
     console.log(Remidi);
     let listManusiaRemidi = Object.fromEntries(Remidi);
    console.log(listManusiaRemidi)

    // Belajar Object.assign();
    let nilaiSiswaNew = {
         Cahyo : 76,
         Rusdi : 92,
         Ambyu : 87,
         Abuya : 43,
         Rusya : 83,
         Garad : 69
    };
    
    let nilaiSiswaGabunganArr = Object.assign([], nilaiSiswa, nilaiSiswaNew);
    console.log(nilaiSiswaGabunganArr); // ini versi Arrnya

    let nilaiSiswaGabunganObj = Object.assign({}, nilaiSiswa, nilaiSiswaNew);
    console.log(nilaiSiswaGabunganObj);

    // Belajar method .freeze()
    let configApi = {
        apiUrl : "https://mancer.work/api", // contoh doang ygy
        method : "POST",
        webServer : "Nginx 19.7",
        isAdmin : false
    };
    console.log(configApi);
    Object.freeze(configApi);
    configApi["isAdmin"] = true; // sorry jiwa cysec ku lagi membara hehehe
    console.log(configApi); // tetep false ygy
    // sorry gw akan command
*/

/* 
    Latihan Mandiri
        1. Dari { a: 10, b: 20, c: 30 }, hitung total semua values pakai Object.values() + reduce()
        2. Dari { js: 90, python: 85, go: 70, rust: 95 }, filter bahasa dengan skor > 80 dan return sebagai object
        3. Bikin fungsi invertObject(obj) yang menukar key ↔ value. Contoh: {a: 1} → {1: "a"}
        4. Merge 3 object: {a:1}, {b:2, a:10}, {c:3} — apa hasil akhirnya?
*/
//soal 1
let test1 = {a :10, b : 20, c :30}
let hasilTest1 = Object.values(test1).reduce(function main(nilaiAwal, nilaiAkhir) {
    return nilaiAwal+ nilaiAkhir;
}, 0);
console.log(hasilTest1);

//soal 2
let test2 = { js : 90, python :85, go :70, rust :95}
let hasilTest2 = Object.fromEntries(Object.entries(test2).filter(i => i[1] > 80)); // latihan make arrow function hehehe
console.log(hasilTest2); 

// soal3
function invertObject(ArrObj) {
    return Object.fromEntries(Object.entries(ArrObj).map( i => i.reverse())); // one line lagi gak tuh wkwkwk
}
let ngetest = {a :12, b : 34, c :83 , d :45, e : 34}
console.log(invertObject(ngetest));

//soal 4
let ob1 = {a : 1}
let ob2 = {b : 2, a : 10}
let ob3 = {c : 13}
let gabunganOb123 = Object.assign({}, ob1, ob2, ob3);
console.log(gabunganOb123); // hasil a = 10 because ketimpa ob2. but posisinya tetap didepan (hanya meinpa value / nilainya )