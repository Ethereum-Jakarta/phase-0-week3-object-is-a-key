function cariModus(arr) {
    let tempat = {};
    let angkaModus = [];
  for(let i = 0; i < arr.length; i++){
    if(!tempat[arr[i]]) {
        tempat[arr[i]] = 1;
    }else {
        tempat[arr[i]]++;
    }
  }

  for(let key in tempat){
    // console.log(tempat[key])
    if(tempat[key] === 2){
        angkaModus.push(key)
    }
}
// console.log(tempat)

    if(angkaModus.length === 0) return -1
  return Number(angkaModus[0])
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1