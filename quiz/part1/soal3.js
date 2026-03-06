function cariMedian(arr) {
    // you can only write your code here!
    arr.sort((a, b) => a - b);                  //urutkan array (ascending)
    let bagi = (arr.length) / 2;                //mencari nilai tengah (panjang arr dibagi 2)
    let modul = (arr.length) % 2;               //menentukan panjang baris ganjil atau genap

    if (modul != 0) {                           //jika ganjil maka bisa langsung ditentukan nilai mediannya
        return arr[Math.floor(bagi)];
    } else {                                    //jika genap maka mencari nilai diantara kedua angka 
        return (arr[bagi] + arr[bagi - 1]) / 2; //yang ada ditengah (dijumlah kemudian dibagi 2)
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5