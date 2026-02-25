function cariMedian(arr) {
    arr.sort((a, b) => a - b); // mengurutkan array dari kecil ke besar
    const mid = Math.floor(arr.length / 2); //index tengah

    if (arr.length % 2 === 0) { // buat if untuk hitung rata2 dari 2 elemen array di tengah.
        return (arr[mid -1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5