let handphone= {
    merk: "realme",
    model: 250,
    harga: 2500000,
    ram: 16,
    storage: 250
};

handphone.warna = 'Merah';
for(let keys in handphone){
    console.log(`${keys} : ${handphone[keys]}`)
}

let makananArr=[
    {nama: "Nasi Goreng", harga: 20000, kategori : "Karbo"},
    { nama: "Ice Cream", harga: 6000, kategori: "Dessert" },
    { nama: "Soup", harga: 29000, kategori: "Cmfort Food" }
]
console.log(makananArr.filter(function(s){
    return s.harga < 20000
}))