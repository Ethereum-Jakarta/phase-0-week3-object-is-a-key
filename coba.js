let arr = [42, 17, 89, 3, 65, 24, 91, 8, 56, 33];

function bubblesort(num){
    for(let i = 0; i < num.length; i++){
        for(let j = 0; j < num.length; j++){
            if(num[j] > num[j+1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return num;
}

console.log(bubblesort(arr));