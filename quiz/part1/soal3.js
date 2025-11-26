function cariMedian(arr) {

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            }
        }
    }

    let index = 0;

    if(arr.length % 2 === 0){
        index = arr.length / 2;
        index = (arr[index] + arr[index -1]) / 2;
    } else{
        index = Math.floor(arr.length / 2);
        index = arr[index]
    }

    return index
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5