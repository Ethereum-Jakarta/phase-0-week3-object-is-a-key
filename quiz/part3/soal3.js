/*
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut
*/

function countProfit(shoppers) {
    var listBarang = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];

    // you can only write your code here!
    let result = [];                                // untuk menyimpan hasil
    if (shoppers.length == 0) {                     // jika shopper tidak ada, maka langsung kembalikan hasilnya
        return result;
    }
    for (let i = 0; i < listBarang.length; i++) {   // loop untuk listBarang
        let pembeli = [];                           // untuk menyimpan nama pembeli barang
        let sisa = listBarang[i][2];
        let untung = 0;                             // untuk menyimpan profit
        let harga = listBarang[i][1];

        for (let j = 0; j < shoppers.length; j++) {         // loop untuk pembeli / shoppers
            if (shoppers[j].product == listBarang[i][0]) {  // menyamakan produk dengan barang yang diinginkan pembeli
                if (sisa >= shoppers[j].amount) {           // jika sisa produk masih memenuhi jumlah permintaan pembeli maka produk dibeli, sedangkan jika tidak sesuai maka pembeli tidak jadi beli
                    pembeli.push(shoppers[j].name);         // memasukkan nama pembeli ke list
                    sisa -= shoppers[j].amount;             // menghitung sisa barang yang telah dibeli
                    untung += harga * shoppers[j].amount;   // menghitung profit / untung barang yang dibeli
                }
            }
        }
        let data = {                    // membuat data barang sesuai format 
            product: listBarang[i][0],
            shoppers: pembeli,
            leftOver: sisa,
            totalProfit: untung
        }
        result.push(data);              // memasukkan data ke variabel result
    }
    return result;
}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]