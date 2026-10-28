# 🔑 Object Basics Deep Dive

> *"Kalau Array nyimpen data pakai nomor urut, Object nyimpen data pakai NAMA. Kayak formulir — setiap kolom ada labelnya."*

---

## Cerita Dulu: Kenapa Object?

Lo udah belajar Array di Week 2. Array keren, tapi kadang kurang deskriptif. Coba liat:

```js
// Data siswa pakai Array
let siswa = ["Andi", 20, "Jakarta", true, 3.75];
// Ini... siapa? Index 0 itu apa? Index 3 itu apa? 🤷
```

Bandingkan sama ini:

```js
// Data siswa pakai Object
let siswa = {
  nama: "Andi",
  umur: 20,
  kota: "Jakarta",
  aktif: true,
  ipk: 3.75
};
// JELAS! Setiap data punya label (key)
```

Object itu kayak **KTP** atau **formulir pendaftaran** — setiap data ada labelnya. Lo langsung tau mana nama, mana umur, mana alamat. Gak perlu hafal index.

---

## Apa Itu Object?

Object adalah **kumpulan pasangan key-value** (key: value). Key itu label/nama, value itu isi data-nya.

```js
let mobil = {
  merk: "Toyota",      // key: "merk", value: "Toyota"
  model: "Avanza",     // key: "model", value: "Avanza"
  tahun: 2022,         // key: "tahun", value: 2022
  warna: "putih"       // key: "warna", value: "putih"
};
```

### Aturan Key

- Key itu **selalu string** (meskipun lo tulis tanpa quotes)
- Kalau key-nya satu kata, gak perlu quotes
- Kalau key-nya ada spasi atau karakter spesial, HARUS pakai quotes

```js
let orang = {
  nama: "Budi",              // ✅ tanpa quotes, satu kata
  "nama lengkap": "Budi S.", // ✅ pakai quotes karena ada spasi
  umur: 25,                  // ✅ key bisa apa aja
  1: "satu"                  // ✅ angka juga bisa, otomatis jadi string
};
```

### Value Bisa Apa Aja

```js
let profile = {
  nama: "Cici",                    // string
  umur: 22,                        // number
  aktif: true,                     // boolean
  hobi: ["baca", "coding"],        // array
  alamat: {                        // object (nested!)
    kota: "Bandung",
    provinsi: "Jawa Barat"
  },
  spikeSkill: null,                // null
  spikeSkill2: undefined           // undefined
};
```

---

## Akses Property Object

Ada 2 cara: **dot notation** dan **bracket notation**.

### Dot Notation (Paling Sering Dipakai)

```js
let siswa = { nama: "Andi", umur: 20, kota: "Jakarta" };

console.log(siswa.nama); // "Andi"
console.log(siswa.umur); // 20
console.log(siswa.kota); // "Jakarta"
```

### Bracket Notation

```js
let siswa = { nama: "Andi", umur: 20, "hobi utama": "coding" };

console.log(siswa["nama"]);         // "Andi"
console.log(siswa["hobi utama"]);   // "coding" — HARUS bracket kalau ada spasi!

// Kelebihan bracket: bisa pakai VARIABEL
let key = "umur";
console.log(siswa[key]); // 20 — key-nya dinamis!
```

### Kapan Pakai yang Mana?

```js
let siswa = { nama: "Andi", umur: 20, kota: "Jakarta" };

// Dot notation — kalau lo TAU key-nya (hardcoded)
console.log(siswa.nama); // ✅ simpel, clean

// Bracket notation — kalau key-nya DINAMIS (dari variabel/input)
let field = "nama";
console.log(siswa[field]); // ✅ flexible

// Bracket notation — kalau key punya karakter spesial
console.log(siswa["hobi utama"]); // ✅ wajib bracket
```

---

## Manipulasi Object

### Tambah Property

```js
let siswa = { nama: "Andi" };

// Dot notation
siswa.umur = 20;

// Bracket notation
siswa["kota"] = "Jakarta";

console.log(siswa); // { nama: "Andi", umur: 20, kota: "Jakarta" }
```

### Ubah Property

```js
let siswa = { nama: "Andi", umur: 20 };
siswa.umur = 21; // ulang tahun! 🎂
console.log(siswa.umur); // 21
```

### Hapus Property

```js
let siswa = { nama: "Andi", umur: 20, kota: "Jakarta" };
delete siswa.kota;
console.log(siswa); // { nama: "Andi", umur: 20 }
```

### Tambah Property Secara Dinamis (Pakai Loop)

```js
let obj = {};

// Tambah property pakai loop
for (let i = 1; i <= 5; i++) {
  obj["item" + i] = i * 10; // key dinamis!
}

console.log(obj);
// { item1: 10, item2: 20, item3: 30, item4: 40, item5: 50 }
```

---

## Loop Object: `for...in`

Array punya `for...of`, Object punya `for...in`. Ini loop spesial buat iterasi semua **key** di object.

```js
let siswa = {
  nama: "Andi",
  umur: 20,
  kota: "Jakarta",
  jurusan: "Informatika"
};

// for...in — iterasi setiap KEY
for (let key in siswa) {
  console.log(key + ": " + siswa[key]);
}
// nama: Andi
// umur: 20
// kota: Jakarta
// jurusan: Informatika
```

### Hati-Hati: `in` vs `of`

```js
// for...in = iterasi KEY (buat Object)
// for...of = iterasi VALUE (buat Array)

let arr = ["apel", "mangga", "jeruk"];

for (let item of arr) {
  console.log(item); // "apel", "mangga", "jeruk"
}

for (let index in arr) {
  console.log(index); // "0", "1", "2" — index sebagai string!
}
```

---

## Cek Property: `in` Operator dan `hasOwnProperty`

```js
let siswa = { nama: "Andi", umur: 20 };

// Cara 1: operator "in"
console.log("nama" in siswa);   // true
console.log("alamat" in siswa); // false

// Cara 2: hasOwnProperty
console.log(siswa.hasOwnProperty("umur"));    // true
console.log(siswa.hasOwnProperty("alamat"));  // false

// Sering dipakai di if statement
if ("nama" in siswa) {
  console.log("Nama ditemukan: " + siswa.nama);
}
```

---

## Object vs Array: Kapan Pakai yang Mana?

| Situasi | Pakai | Contoh |
|---------|-------|--------|
| Data berurut, sejenis | Array | `[85, 90, 78, 92]` |
| Data berlabel, berbeda tipe | Object | `{nama: "Andi", umur: 20}` |
| Kumpulan data berlabel | Array of Objects | `[{nama: "Andi"}, {nama: "Budi"}]` |

```js
// Real-world: Array of Objects (PALING SERING dipakai!)
let students = [
  { 
    nama: "Andi", 
    nilai: 85, 
    lulus: true 
    },

  { 
    nama: "Budi", 
    nilai: 60, 
    lulus: false 
    },

  { 
    nama: "Cici", 
    nilai: 92, 
    lulus: true 
    }
];

// Bisa di-loop, di-filter, di-map!
let yangLulus = students.filter(function(s) {
  return s.lulus === true;
});
console.log(yangLulus);
// [{ nama: "Andi", nilai: 85, lulus: true }, { nama: "Cici", nilai: 92, lulus: true }]
```

---

## Latihan Mandiri

1. Bikin object `handphone` dengan minimal 5 property (merk, model, harga, ram, storage)
2. Tambah property `warna` setelah object dibuat
3. Loop semua property dan print `key: value`
4. Bikin array of objects berisi 3 makanan (nama, harga, kategori), filter yang harganya di bawah 20000

---

## Sumber Tambahan

- 📹 [Tutorial Object by Harkon](https://youtu.be/pCYUrbRRRXQ)
- 📖 [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- ⚠️ **Sangat disarankan untuk mencari sumber belajar object dari tempat lain!**
