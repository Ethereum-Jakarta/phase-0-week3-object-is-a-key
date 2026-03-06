
function cariModus(arr) {
    arr.sort((a, b) => a - b);
    let max = 0, modus = 0;

    for (let i = 0; i < arr.length; i++) {
        let amount = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                amount++
            }
        }
        if (amount > max) {
            max = amount;
            modus = arr[i]
        } else if (amount === arr.length) {
            return -1
        }
    }

    if (max === 1) {
        return -1
    }
    return modus;
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1