function urutkanAbjad(str) {
    str = str.split("")

    var temp = null
    var swapped = null

    for (var i = 0, n = str.length; i < n; i++) {
        swapped = false

        for (var j = 0; j < n - i - 1; j++) {
            if (str[j] > str[j + 1]) {
                temp = str[j]
                str[j] = str[j + 1]
                str[j + 1] = temp
                swapped = true
            }
        }

        if (swapped === false) break
    }

    return str.join("")
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
