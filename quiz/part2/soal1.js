function digitPerkalianMinimum(angka) {
    let pasangan = []
    let hasil = 0


  for (let i = 0; i <= angka; i++) {
   if (angka%i===0) {
    hasil = angka/i
    pasangan.push([i,hasil].join(''))
   }
  }

  pasangan.sort((a,b)=>a-b)


  if (pasangan[0]==='11') {
    return 2
  }

  
  return pasangan[0].length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2