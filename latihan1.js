// 1. Bikin object `handphone` dengan minimal 5 property (merk, model, harga, ram, storage)
// 2. Tambah property `warna` setelah object dibuat
// 3. Loop semua property dan print `key: value`
// 4. Bikin array of objects berisi 3 makanan (nama, harga, kategori), filter yang harganya di bawah 20000

let handphone = {
    merk    : "Asus", 
    model   : "zenphone",
    harga   : 5000000,
    ram     : 16,
    storage : 512
};

// console.log(handphone);

handphone.warna = "Hijau";
// console.log(handphone);

for(let kunci in handphone){
    console.log(kunci +" : "+ handphone[kunci]);
}

let makanan = [
    {
        nama    : "Pizza",
        harga   : 50000,
        kategori: "Junkfood"
    },

    {
        nama    : "Burger",
        harga   : 35000,
        kategori: "Junkfood"
    },

    {
        nama    : "Bayam",
        harga   : 5000,
        kategori: "Sayuran"
    }
];

let murah = makanan.filter(function(m){
    return m.harga < 20000;
});

console.log(murah);