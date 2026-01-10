
//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  // caranya tak samain kayak yang quiz part 1 yaa hehehe
  let semua_huruf_kecil = "abcdefghijklmnopqrstuvwxyz"; 
  let semua_huruf_besar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arr = kalimat.split("");// karena aku cari2 ternyata gak ada cara buat mengetahui kecil besarnya huruf, jadi kau pake cara ini
  for (let i = 0; i < kalimat.length; i++) {
    for (let q = 0; q < semua_huruf_kecil.length;q++) { // alasanku sering pake q karena kalo j mirip kyk i wkwkwkwk
        if (kalimat[i] === semua_huruf_besar[q]) {
            arr[i] = kalimat[i].toLowerCase();
        } else if (kalimat[i] === semua_huruf_kecil[q]) {
            arr[i] = kalimat[i].toUpperCase();
        }
    }
    
  }
  kalimat = arr.join("");
  return kalimat;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"