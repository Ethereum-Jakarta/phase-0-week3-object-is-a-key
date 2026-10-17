# 🧰 Object Methods — keys, values, entries

> *"Kalau lo mau tau isi lemari tanpa buka satu-satu, Object.keys() kasih tau daftar lacinya, Object.values() kasih tau isinya, Object.entries() kasih tau dua-duanya."*

---

## Kenapa Butuh Object Methods?

Di Week sebelumnya, lo udah belajar `for...in` buat loop object. Tapi JavaScript punya **static methods** yang bikin hidup lo lebih gampang — terutama kalau lo mau combine sama array methods (map, filter, reduce).

```js
let siswa = { nama: "Andi", umur: 20, kota: "Jakarta" };

// for...in works, tapi kadang kurang flexible
for (let key in siswa) {
  console.log(key, siswa[key]);
}

// Object methods → convert ke ARRAY → bisa pakai map, filter, reduce!
```

---

## 🔑 `Object.keys()` — Ambil Semua Key

Return array berisi **semua key** (nama property) dari object.

```js
let mobil = {
  merk: "Toyota",
  model: "Avanza",
  tahun: 2022,
  warna: "putih"
};

let keys = Object.keys(mobil);
console.log(keys); // ["merk", "model", "tahun", "warna"]
console.log(keys.length); // 4 — ada 4 property
```

### Use Case: Hitung Jumlah Property

```js
let data = { a: 1, b: 2, c: 3, d: 4 };
console.log(Object.keys(data).length); // 4
```

### Use Case: Cek Object Kosong atau Bukan

```js
let objKosong = {};
let objIsi = { nama: "Andi" };

console.log(Object.keys(objKosong).length === 0); // true — kosong!
console.log(Object.keys(objIsi).length === 0);    // false — ada isinya
```

---

## 💎 `Object.values()` — Ambil Semua Value

Return array berisi **semua value** dari object.

```js
let harga = {
  nasiGoreng: 25000,
  mieAyam: 20000,
  bakso: 15000,
  esTeh: 5000
};

let semuaHarga = Object.values(harga);
console.log(semuaHarga); // [25000, 20000, 15000, 5000]

// Bisa langsung di-reduce buat hitung total!
let totalHarga = Object.values(harga).reduce(function(total, h) {
  return total + h;
}, 0);
console.log("Total: Rp " + totalHarga); // "Total: Rp 65000"
```

### Use Case: Cari Nilai Terbesar

```js
let scores = { andi: 85, budi: 92, cici: 78 };
let tertinggi = Math.max(...Object.values(scores));
console.log(tertinggi); // 92
```

---

## 📋 `Object.entries()` — Ambil Pasangan [key, value]

Return array of arrays, setiap sub-array berisi `[key, value]`.

```js
let siswa = { nama: "Andi", umur: 20, kota: "Jakarta" };

let entries = Object.entries(siswa);
console.log(entries);
// [
//   ["nama", "Andi"],
//   ["umur", 20],
//   ["kota", "Jakarta"]
// ]
```

### Use Case: Loop Object dengan Destructuring

```js
let harga = { nasiGoreng: 25000, mieAyam: 20000, bakso: 15000 };

// Pakai for...of + destructuring — CLEAN!
for (let [menu, price] of Object.entries(harga)) {
  console.log(`${menu}: Rp ${price.toLocaleString("id-ID")}`);
}
// nasiGoreng: Rp 25.000
// mieAyam: Rp 20.000
// bakso: Rp 15.000
```

### Use Case: Filter Object Property

Object gak punya `.filter()`, tapi lo bisa convert ke entries, filter, terus convert balik!

```js
let scores = { andi: 85, budi: 60, cici: 92, dodi: 45 };

// Filter: ambil yang nilainya >= 75
let lulus = Object.entries(scores) //Object.entries convert object ke array [[key1,value1],[key2,value2].....]
  .filter(function(entry) {
    return entry[1] >= 75; // entry[1] = value (nilainya)
  });

console.log(lulus); // [["andi", 85], ["cici", 92]]
```

---

## 🔄 `Object.fromEntries()` — Convert Entries Balik ke Object

Kebalikan dari `Object.entries()`.

```js
let entries = [["nama", "Andi"], ["umur", 20], ["kota", "Jakarta"]];
let obj = Object.fromEntries(entries);
console.log(obj); // { nama: "Andi", umur: 20, kota: "Jakarta" }
```

### Combo: Filter Object Lalu Convert Balik

```js
let scores = { andi: 85, budi: 60, cici: 92, dodi: 45 };

// Filter yang lulus, terus jadiin object lagi
let lulusObj = Object.fromEntries(
  Object.entries(scores).filter(function(entry) {
    return entry[1] >= 75;
  })
);

console.log(lulusObj); // { andi: 85, cici: 92 }
```

---

## 🔒 `Object.assign()` — Copy/Merge Object

Cara lain buat copy atau merge object (selain spread).

```js
// Copy object
let original = { a: 1, b: 2 };
let copy = Object.assign({}, original);
console.log(copy); // { a: 1, b: 2 }

// Merge beberapa object
let defaults = { theme: "light", lang: "en" };
let userPref = { theme: "dark" };
let merged = Object.assign({}, defaults, userPref);
console.log(merged); // { theme: "dark", lang: "en" }
// Property yang sama → yang terakhir menang!
```

---

## 🧊 `Object.freeze()` — Bikin Object Gak Bisa Diubah

```js
let config = { apiUrl: "https://api.ethjkt.dev", version: "1.0" };
Object.freeze(config);

config.apiUrl = "https://hacked.com"; // ❌ GAGAL! (silent fail di non-strict)
config.newProp = "test";              // ❌ GAGAL!
delete config.version;                // ❌ GAGAL!

console.log(config); // { apiUrl: "https://api.ethjkt.dev", version: "1.0" } — AMAN!
```

---

## Cheat Sheet

| Method | Return | Fungsi |
|--------|--------|--------|
| `Object.keys(obj)` | `string[]` | Ambil semua key |
| `Object.values(obj)` | `any[]` | Ambil semua value |
| `Object.entries(obj)` | `[string, any][]` | Ambil pasangan [key, value] |
| `Object.fromEntries(arr)` | `object` | Convert entries → object |
| `Object.assign(target, ...sources)` | `object` | Copy/merge object |
| `Object.freeze(obj)` | `object` | Bikin immutable |

---

## Latihan Mandiri

1. Dari `{ a: 10, b: 20, c: 30 }`, hitung total semua values pakai `Object.values()` + `reduce()`
2. Dari `{ js: 90, python: 85, go: 70, rust: 95 }`, filter bahasa dengan skor > 80 dan return sebagai object
3. Bikin fungsi `invertObject(obj)` yang menukar key ↔ value. Contoh: `{a: 1}` → `{1: "a"}`
4. Merge 3 object: `{a:1}`, `{b:2, a:10}`, `{c:3}` — apa hasil akhirnya?

---

## Sumber Tambahan

- 📖 [MDN Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- 📖 [MDN Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
