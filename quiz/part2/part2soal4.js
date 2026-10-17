/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(kalimat) {
    // you can only write your code here!
    let indexaArr = [];
    let indexbArr = [];
    for(let i = 0; i<kalimat.length; i++){
        if (kalimat[i] == 'a'){
            indexaArr.push(i);
        }
        else if (kalimat[i] == 'b'){
            indexbArr.push(i);
        } 
    }

    //console.log(indexaArr);
    //console.log(indexbArr);

    for(let j = 0; j < indexaArr.length; j++){
        for(let k = 0; k < indexbArr.length; k++){
            if(Math.abs(indexaArr[j] - indexbArr[k]) == 4){
                return true;
            }
        }
    }
    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false