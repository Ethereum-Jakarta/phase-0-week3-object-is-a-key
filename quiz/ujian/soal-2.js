/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    const detail = [];
    for (let i = 0; i < arrPenumpang.length; i++) {
        const element = arrPenumpang[i];
        const name = element[0];
        const from = element[1];
        const destination = element[2];
        const routes = [];
        let payment = 0;
        for (let j = 0; j < rute.length; j++) {
            const point = rute[j];
            if(from === point || destination === point) routes.push(j)
            
        }
        for (let k = 0; k < routes.length; k++) {
            // const route = routes[k];
            if(routes[k] === 0) {
                // break
                payment = Number(routes[k + 1]) * 2000
                break;
            } else {
                payment = (Number(routes[k + 1]) - Number(routes[k])) * 2000
                break;
            }
        }
        detail.push({penumpang: name, naikDari: from, tujuan: destination, bayar: payment})
    }
    return arrPenumpang.length > 0 ? detail : [];
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]