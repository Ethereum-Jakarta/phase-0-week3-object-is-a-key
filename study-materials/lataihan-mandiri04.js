function cariSiswaTertinggi(obj){
    let tertinggi = {};
    for(item of obj.kelas){
        let nilaiMaximal = item.siswa[0].nilai;
        let namaMaximal = item.siswa[0].nama;
        for(let i = 1; i<item.siswa.length; i++){
            if(nilaiMaximal < item.siswa[i].nilai){
                nilaiMaximal = item.siswa[i].nilai;
                namaMaximal = item.siswa[i].nama;
            }
        }
        tertinggi[item.nama] = namaMaximal;
    }
    return tertinggi;
}

function kotaSiswa(obj){
    let kotaObj = {};
    for(siswa of obj){
        if(!kotaObj[siswa.kota]){
            kotaObj[siswa.kota] = 1;
        }
        else{
            kotaObj[siswa.kota] += 1
        }
    }
    return kotaObj;
}




let sekolah = {
    nama: "SMA ETHJKT",
    kelas: [
        {
            nama: "XII-A",
            waliKelas: "Pak Budi",
            siswa: [
                { nama: "Andi", nilai: 85 },
                { nama: "Cici", nilai: 92 }
            ]
        },
        {
            nama: "XII-B",
            waliKelas: "Bu Sari",
            siswa: [
                { nama: "Dodi", nilai: 78 },
                { nama: "Eka", nilai: 88 }
            ]
        }
    ]
};



let students = [
    { nama: "Andi", umur: 20, nilai: 85, kota: "Jakarta" },
    { nama: "Budi", umur: 22, nilai: 72, kota: "Bandung" },
    { nama: "Cici", umur: 21, nilai: 95, kota: "Jakarta" },
    { nama: "Dodi", umur: 23, nilai: 60, kota: "Surabaya" },
    { nama: "Eka", umur: 20, nilai: 88, kota: "Jakarta" }
];


let toko = {
    DepartmentStoreTangerang: ['Handphone', 'Smooth Hardware'],
    DepartmentStoreJakarta: ['Laptop, Kipas Portable'],
    DepartmentStoreCirebon: ['Jangka', 'Stylus'],
    DepartmentStoreSemarang: ['Grosir Bulpen', 'AC Rumahan'],
    DepartmentStoreSurabaya: ['Laptop', 'Cat Rumah']
};

console.log(cariSiswaTertinggi(sekolah));
console.log(kotaSiswa(students));

for(key in toko){
    let string = ''
    for(item of toko[key]){
        if(item != toko[key][0]){
            string = string + ', ' + item;
       }
       else {
        string = item;
       }
    }   
    console.log(`${key.substring(0, 10)} ${key.substring(10, 15)} ${key.substring(15, key.length)} menjual: ${string}`)
}