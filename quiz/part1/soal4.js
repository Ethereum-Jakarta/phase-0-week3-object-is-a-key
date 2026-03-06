function cariModus(arr) {
    var data = {}

    for (var number of arr) {
        if (data[number]) {
            data[number]++
        } else {
            data[number] = 1
        }
    }

    var mode = -1
    var freq = -1

    for (var number in data) {
        if (data[number] > 1 && data[number] > freq) {
            freq = data[number]
            mode = number
        }
    }

    if (freq === arr.length) {
        return -1
    }

    return Number(mode)
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
