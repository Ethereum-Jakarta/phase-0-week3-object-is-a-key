//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima({ angka }) { return angka > 1 && [...Array(Math.floor(Math.sqrt(angka)) + 1).keys()].slice(2).every(i => angka % i !== 0); }
  
  // TEST CASES
  console.log(angkaPrima({ angka: 3 })); // true
  console.log(angkaPrima({ angka: 7 })); // true
  console.log(angkaPrima({ angka: 6 })); // false
  console.log(angkaPrima({ angka: 23 })); // true
  console.log(angkaPrima({ angka: 33 })); // false

  //bilangan prima 2,3,5,7,11,13,1719,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229
  //bilangan prima adalah bilangan yang hanya bisa dibagi oleh 1 dan bilangan itu sendiri