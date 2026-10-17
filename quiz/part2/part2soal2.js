//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function isSorted(arr){
    for(let i =0;i<arr.length-1;i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

function urutkanAbjad(str) {
    // you can only write your code here!
    let charCodeArr = [];
    let sortedStr = '';
    for(let i=0;i<str.length;i++){
        charCodeArr.push(str.charCodeAt(i));
    }

    while(!isSorted(charCodeArr)){
        for(let i = 0; i < charCodeArr.length-1; i++){
            if (charCodeArr[i] > charCodeArr[i+1]){
                let small = charCodeArr[i+1];
                let big = charCodeArr[i];

                charCodeArr[i] = small;
                charCodeArr[i+1] = big;
            }
        }
    }

    for(let i =0; i<charCodeArr.length; i++){
        sortedStr = sortedStr + String.fromCharCode(charCodeArr[i]);
    }
    return sortedStr;


}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

