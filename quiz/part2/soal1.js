function digitPerkalianMinimum(angka) {
    let ang = [];
  for(let i = 1; i <= angka; i++){
    for(let j = angka; j >= 1; j--){
    if(i * j === angka && i <= j){
      ang.push(String(i).length + String(j).length)
      }
    }
  }

  return Math.min(...ang)
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2