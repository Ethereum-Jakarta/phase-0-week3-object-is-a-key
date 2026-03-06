function ubahHuruf(kata) {
  let hasil = "";
  for (let i = 0; i < kata.length; i++) {
    let kode = kata.charCodeAt(i);
    if (kode === 122) {
      hasil += String.fromCharCode(97);
      hasil += String.fromCharCode(kode + 1);
    }
  }
  return hasil;
}

console.log(ubahHuruf("wow"));
console.log(ubahHuruf("developer"));
console.log(ubahHuruf("javascript"));
console.log(ubahHuruf("keren"));
console.log(ubahHuruf("semangat"));
