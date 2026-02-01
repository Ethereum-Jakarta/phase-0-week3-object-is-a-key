# Mendalami Tipe Data Obejct | Part 1

Pada pertemuan kali ini, kalian akan belajar apa itu object pada javascript.
Objek adalah kumpulan tidak berurut yang merangkai beberapa property dan property memiliki nama/key dan value (key-value pairs).

object itu seperti berikut
```js
let myObj = {
  myKey: 'myValue'
};
```
lengkapnya seperti ini
```js
const myObj = {
  nama: 'bryan',
  kelas: '12',
  hobbi: ['main', 'makan', 'tidur'],
  detail: {
    tinggi: 185,
    berat: 60
  }
};
```
Cara akses object bisa seperti ini
```js
console.log(myObj)
console.log(myObj.nama)
console.log(myObj.kelas)
console.log(myObj.hobbi[1])
console.log(myObj.detail.tinggi)
const detail = myObj.detail;

console.log(detail.berat)
```
Cara memanipulasi isi object
```js
myObj.kelakuan = 'baik';
//atau bisa seperti ini
myObj['isNolep'] = true;

//atau dengan loop
let objAngka = {};
for (let i = 1; i <= 3; i++) {
  objAngka[i] = i
}
console.log(objAngka)
```
Cara menghapus tipe data object
```js
delete myObj.isNolep; //atau delete myObj['isNolep'];
```
Loop khusus untuk tipe data object
```js
for (const key in myObj) {
  console.log(`${key}: ${myObj[key]}`);
}
```

Btw, kalian akan menemukan tipe data array yang terstruktur rapi, dan kalian ingin mengambil item pada array itu kedalam object dan mengubahnya kembali kedalam array agar rapi. Kalian bisa melakukannya seperti ini:

```js
let studentDatas = [['John', 'Doe'], ['Joe', 'Anna']]
let newStudentDatas = [];

for (let i = 0; i < studentDatas.length; i++) {
    let data = {
        firstName: studentDatas[i][0],
        lastName: studentDatas[i][1],
    }

    newStudentDatas.push(data)
}

console.log(newStudentDatas)
```

Langsung cobain praktek untuk manipulasi object, dan banyakin latihan dengan object
---------------------------------------
video tentang object

[Tutorial Object by Harkon](https://youtu.be/pCYUrbRRRXQ)

***Sangat disarankan untuk mencari sumber belajar object dari tempat lain***
