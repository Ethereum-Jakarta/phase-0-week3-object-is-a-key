// Soal 2
// js
//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) 
{
  // you can only write your code here!
    str = str.split('');
    for (let i = 0; i < str.length - 1; i++)
    {
        let swapped = false;

        for (let j = 0; j < str.length - i - 1; j++)
        {
            if (str[j].charCodeAt(0) > str[j + 1].charCodeAt(0))
            {
                let temp = str[j];
                str.splice(j, 1, str[j + 1]);
                str.splice((j + 1), 1, temp);
                swapped = true;
            }
        }

        if (swapped === false)
        {
            break;
        }
    }
    
    str = str.join('');
    return str;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'