function cariModus(arr) {
    // you can only write your code here!
    let object = {};
    for(let num of arr){
        if(object[num] === undefined){
            object[num] = 1;
        } else {
            object[num] += 1;
        }
    }
    idx = [];
    let max = 0;
    for (let key in object){
        if(object[key] > max){
            max = object[key];
            idx = [key];
        } else if (object[key] === max){
            idx.push(key);
        }
    }
    return idx.length === Object.keys(object).length ? -1 : idx[0];
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1