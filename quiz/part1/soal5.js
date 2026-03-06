//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let abjad = "abcdefghijklmnopqrstuvwxyz"
  let result = ""

  for(let i in kata){
    for(let j = 0; j < abjad.length; j++){
      if(kata[i] === abjad[j]){
        result += abjad[j+1]
      }
    }
  }
  return result
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
