//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    let arr = str.split('');

    for (let i = 0; i < arr.length -1; i++) {
        for (let j = 0; j < arr.length - i -1; j++) {
            if (arr[j] > arr[j+1]) { //menukar posisi jika urutan salah.
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr.join(''); // menggabungkan semua array menjadi satu string.
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'