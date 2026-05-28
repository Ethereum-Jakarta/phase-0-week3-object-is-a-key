/*
    Latihan Mandiri
        1. Dari data sekolah di atas, cari siswa dengan nilai tertinggi di semua kelas
        2. Bikin fungsi countByCity(students) yang return object { "Jakarta": 3, "Bandung": 1, ... }
        3. Akses data berlapis: bikin object toko dengan property departemen (array of objects), setiap departemen punya produk (array of objects). Cetak semua produk di semua departemen.
*/

// soal 1
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
let nilaiTertinggi = 0;
let namaNilaiTertinggi = "";
for (let i in sekolah['kelas']) {
    for (let w of sekolah['kelas'][i]['siswa']) {
      if (nilaiTertinggi < w['nilai']) {
        nilaiTertinggi = w['nilai'];
        namaNilaiTertinggi = w['nama'];
      }   
    }
}
let hasil1 = {[namaNilaiTertinggi] : nilaiTertinggi}; // jangan lupa kasih [] biar gak dianggep string wkwkwk
console.log(hasil1);

//soal 2
// btw, saya pake chatgpt untuk genrate data dummy. (capek kalo manual capek wkwkwk. sekalian buat simulasi ngelola big data juga)
let sekolah2 = {
  nama: "SMA ETHJKT BTC 1 Jakarta",
  kelas: [
    {
      nama: "XII-A",
      waliKelas: "Pak Budi",
      siswa: [
        { nama: "Andi", kota: "Jakarta", nilai: 85 },
        { nama: "Cici", kota: "Bandung", nilai: 92 },
        { nama: "Dimas", kota: "Jakarta", nilai: 78 },
        { nama: "Eka", kota: "Surabaya", nilai: 88 },
        { nama: "Fajar", kota: "Bogor", nilai: 81 },
        { nama: "Gina", kota: "Jakarta", nilai: 95 },
        { nama: "Hadi", kota: "Depok", nilai: 76 },
        { nama: "Intan", kota: "Bekasi", nilai: 89 },
        { nama: "Joko", kota: "Bandung", nilai: 73 },
        { nama: "Kiki", kota: "Jakarta", nilai: 84 },
        { nama: "Lina", kota: "Tangerang", nilai: 90 },
        { nama: "Mira", kota: "Bogor", nilai: 87 },
        { nama: "Nando", kota: "Jakarta", nilai: 79 },
        { nama: "Oki", kota: "Bekasi", nilai: 82 },
        { nama: "Putri", kota: "Bandung", nilai: 91 },
        { nama: "Qori", kota: "Depok", nilai: 75 },
        { nama: "Rina", kota: "Jakarta", nilai: 93 }
      ]
    },

    {
      nama: "XII-B",
      waliKelas: "Bu Sari",
      siswa: [
        { nama: "Asep", kota: "Bandung", nilai: 80 },
        { nama: "Bela", kota: "Jakarta", nilai: 91 },
        { nama: "Candra", kota: "Bogor", nilai: 77 },
        { nama: "Dewi", kota: "Bekasi", nilai: 86 },
        { nama: "Erwin", kota: "Jakarta", nilai: 74 },
        { nama: "Fitri", kota: "Surabaya", nilai: 95 },
        { nama: "Galih", kota: "Depok", nilai: 82 },
        { nama: "Hana", kota: "Bandung", nilai: 88 },
        { nama: "Ivan", kota: "Jakarta", nilai: 79 },
        { nama: "Jihan", kota: "Tangerang", nilai: 90 },
        { nama: "Kevin", kota: "Bogor", nilai: 83 },
        { nama: "Lutfi", kota: "Jakarta", nilai: 72 },
        { nama: "Mega", kota: "Bekasi", nilai: 89 },
        { nama: "Nina", kota: "Bandung", nilai: 93 },
        { nama: "Oscar", kota: "Jakarta", nilai: 81 },
        { nama: "Prita", kota: "Depok", nilai: 76 },
        { nama: "Robby", kota: "Jakarta", nilai: 87 },
        { nama: "Salsa", kota: "Bogor", nilai: 92 }
      ]
    },

    {
      nama: "XII-C",
      waliKelas: "Pak Dedi",
      siswa: [
        { nama: "Tono", kota: "Jakarta", nilai: 84 },
        { nama: "Uli", kota: "Bandung", nilai: 90 },
        { nama: "Vina", kota: "Bekasi", nilai: 88 },
        { nama: "Wawan", kota: "Bogor", nilai: 71 },
        { nama: "Xena", kota: "Depok", nilai: 93 },
        { nama: "Yoga", kota: "Jakarta", nilai: 85 },
        { nama: "Zaki", kota: "Surabaya", nilai: 79 },
        { nama: "Anya", kota: "Bandung", nilai: 82 },
        { nama: "Bimo", kota: "Jakarta", nilai: 94 },
        { nama: "Cleo", kota: "Bekasi", nilai: 77 },
        { nama: "Dian", kota: "Bogor", nilai: 86 },
        { nama: "Evan", kota: "Tangerang", nilai: 80 },
        { nama: "Fina", kota: "Jakarta", nilai: 91 },
        { nama: "Gilang", kota: "Depok", nilai: 74 },
        { nama: "Hilda", kota: "Bandung", nilai: 89 },
        { nama: "Irfan", kota: "Jakarta", nilai: 78 },
        { nama: "Jesica", kota: "Bekasi", nilai: 92 }
      ]
    },

    {
      nama: "XII-D",
      waliKelas: "Bu Rina",
      siswa: [
        { nama: "Karina", kota: "Jakarta", nilai: 88 },
        { nama: "Leo", kota: "Bandung", nilai: 81 },
        { nama: "Mona", kota: "Bogor", nilai: 93 },
        { nama: "Niko", kota: "Bekasi", nilai: 76 },
        { nama: "Olga", kota: "Depok", nilai: 87 },
        { nama: "Pandu", kota: "Jakarta", nilai: 79 },
        { nama: "Queen", kota: "Surabaya", nilai: 95 },
        { nama: "Rendy", kota: "Bandung", nilai: 84 },
        { nama: "Sinta", kota: "Jakarta", nilai: 91 },
        { nama: "Tari", kota: "Bogor", nilai: 82 },
        { nama: "Umar", kota: "Bekasi", nilai: 75 },
        { nama: "Vero", kota: "Tangerang", nilai: 89 },
        { nama: "Widi", kota: "Jakarta", nilai: 90 },
        { nama: "Yuni", kota: "Depok", nilai: 77 },
        { nama: "Zahra", kota: "Bandung", nilai: 92 },
        { nama: "Aldi", kota: "Jakarta", nilai: 83 },
        { nama: "Bella", kota: "Bekasi", nilai: 85 },
        { nama: "Chika", kota: "Bogor", nilai: 80 }
      ]
    },

    {
      nama: "XII-E",
      waliKelas: "Pak Anton",
      siswa: [
        { nama: "Daffa", kota: "Jakarta", nilai: 86 },
        { nama: "Elsa", kota: "Bandung", nilai: 91 },
        { nama: "Farhan", kota: "Bogor", nilai: 73 },
        { nama: "Gita", kota: "Bekasi", nilai: 88 },
        { nama: "Hari", kota: "Depok", nilai: 80 },
        { nama: "Indra", kota: "Jakarta", nilai: 95 },
        { nama: "Jeni", kota: "Surabaya", nilai: 84 },
        { nama: "Kamal", kota: "Bandung", nilai: 78 },
        { nama: "Lala", kota: "Jakarta", nilai: 92 },
        { nama: "Miko", kota: "Bogor", nilai: 81 },
        { nama: "Nadia", kota: "Bekasi", nilai: 87 },
        { nama: "Omar", kota: "Tangerang", nilai: 76 },
        { nama: "Putra", kota: "Jakarta", nilai: 89 },
        { nama: "Qila", kota: "Depok", nilai: 82 },
        { nama: "Rafi", kota: "Bandung", nilai: 90 },
        { nama: "Siska", kota: "Jakarta", nilai: 85 },
        { nama: "Teguh", kota: "Bekasi", nilai: 79 }
      ]
    },

    {
      nama: "XII-F",
      waliKelas: "Bu Maya",
      siswa: [
        { nama: "Ucup", kota: "Jakarta", nilai: 77 },
        { nama: "Vivi", kota: "Bandung", nilai: 94 },
        { nama: "Wahyu", kota: "Bogor", nilai: 83 },
        { nama: "Xavier", kota: "Bekasi", nilai: 88 },
        { nama: "Yola", kota: "Depok", nilai: 91 },
        { nama: "Zidan", kota: "Jakarta", nilai: 80 },
        { nama: "Amel", kota: "Surabaya", nilai: 85 },
        { nama: "Bagas", kota: "Bandung", nilai: 79 },
        { nama: "Citra", kota: "Jakarta", nilai: 93 },
        { nama: "Doni", kota: "Bogor", nilai: 74 },
        { nama: "Erlin", kota: "Bekasi", nilai: 86 },
        { nama: "Fikri", kota: "Tangerang", nilai: 81 },
        { nama: "Ghea", kota: "Jakarta", nilai: 90 },
        { nama: "Hilmi", kota: "Depok", nilai: 78 },
        { nama: "Icha", kota: "Bandung", nilai: 92 },
        { nama: "Jamal", kota: "Jakarta", nilai: 84 },
        { nama: "Karin", kota: "Bekasi", nilai: 87 },
        { nama: "Lukman", kota: "Bogor", nilai: 82 },
        { nama: "Mila", kota: "Jakarta", nilai: 96 }
      ]
    }
  ]
};
function countByCity(arrSekolah) {
  let outputProgram = {} 
  for (let i in arrSekolah['kelas']) {
    for ( let q of arrSekolah['kelas'][i]['siswa']) {
      if (outputProgram.hasOwnProperty(q['kota'])) {
        outputProgram[q['kota']] += 1
      } else {
        outputProgram[q['kota']] = 1;
      }
    }
  }
  return outputProgram;
}
let hasil2 = countByCity(sekolah2);
for (let key2 in hasil2) {
  console.log(`Sejumlah ${hasil2[key2]} siswa, tinggal dikota ${key2}`);
}

//soal3
//Akses data berlapis: bikin object toko dengan property departemen (array of objects), setiap departemen punya produk (array of objects). Cetak semua produk di semua departemen.

// Data dummy toko

const toko = {
  nama: "Toko Maju Jaya",
  alamat: "Semarang",
  departemen: [
    {
      nama: "Elektronik",
      produk: [
        {
          id: 1,
          nama: "Laptop ASUS",
          harga: 8500000,
          stok: 5
        },
        {
          id: 2,
          nama: "Mouse Logitech",
          harga: 250000,
          stok: 15
        }
      ]
    },
    {
      nama: "Fashion",
      produk: [
        {
          id: 3,
          nama: "Kaos Polos",
          harga: 120000,
          stok: 20
        },
        {
          id: 4,
          nama: "Jaket Hoodie",
          harga: 350000,
          stok: 8
        }
      ]
    },
    {
      nama: "Makanan",
      produk: [
        {
          id: 5,
          nama: "Mie Instan",
          harga: 3500,
          stok: 100
        },
        {
          id: 6,
          nama: "Kopi Sachet",
          harga: 2500,
          stok: 75
        }
      ]
    }
  ]
};

// TODO:
// Cetak semua produk di semua departemen
// Gunakan perulangan untuk mengakses:
// toko -> departemen -> produk
for (i in toko) {
    if(typeof(toko[i]) !== "object") {
        console.log(toko[i]);
    } 
}

for (i in toko['departemen']) {
    console.log(toko['departemen'][i]['nama']);
    for (q in toko['departemen'][i]['produk']) {
        console.log(`   nama : ${toko['departemen'][i]['produk'][q]['nama']}`);
    }
}