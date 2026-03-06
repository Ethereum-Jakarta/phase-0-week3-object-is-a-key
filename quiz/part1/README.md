# Logic Challenge tanpa tipe data object | Part 1

Sabar jangan langsung ke object dulu, kalian harus asah logic lagi wkwk

## Soal 1

```js
//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  // you can only write your code here!
  if (angka < 2) {
    return false;
  }

  for (i = 2; i < Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
```

## Soal 2

```js
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  let min = Math.min(angka1, angka2);

  for (let i = min; i >= 1; i--) {
    if (angka1 % i === 0 && angka2 % i === 0) {
      return i;
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
```

## Soal 3

```js
function cariMedian(arr) {
  // you can only write your code here!
  arr.sort((a, b) => a - b);
  n = arr.length;

  if (n % 2 === 1) {
    return arr[Math.floor(n / 2)];
  } else {
    let mid1 = arr[n / 2 - 1];
    let mid2 = arr[n / 2];
    return (mid1 + mid2) / 2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
```

## Soal 4

```js
/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
  // you can only write your code here!
  let hasil = {};

  for (let i = 0; i < arr.length; i++) {
    let angka = arr[i];

    if (hasil[angka]) {
      hasil[angka]++;
    } else {
      hasil[angka] = 1;
    }
  }

  let modus = null;
  let maxFrekuensi = 0;

  for (let key in hasil) {
    if (hasil[key] > maxFrekuensi) {
      maxFrekuensi = hasil[key];
      modus = Number(key);
    }
  }

  if (maxFrekuensi === 1) {
    return -1;
  }

  if (Object.keys(hasil).length === 1) {
    return -1;
  }
  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
```

## Soal 5

```js
//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  const huruf = "abcdefghijklmnopqrstuvwxyz";
  let hasil = "";

  for (let i = 0; i < kata.length; i++) {
    let index = huruf.indexOf(kata[i]);
    let nextChar = huruf[(index + 1) % huruf.length];
    hasil += nextChar;
  }
  return hasil;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
```
