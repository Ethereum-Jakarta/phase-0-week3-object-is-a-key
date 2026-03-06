function countProfit(shoppers) {
    var listBarang = [['Sepatu Stacattu', 1500000, 10],
                      ['Baju Zoro', 500000, 2],
                      ['Sweater Uniklooh', 175000, 1]
                     ];
    let hasil2 = [];
    if(shoppers.length === 0) return [];
    
    for(let i = 0; i < listBarang.length; i++){
            let hasil = { product: '',
                          shoppers: [],
                          leftOver: 0,
                          totalProfit: 0}

            hasil.product = listBarang[i][0]
            hasil.leftOver += listBarang[i][2]

        for(let j = 0; j < shoppers.length; j++){
            if(shoppers[j].product === listBarang[i][0] && shoppers[j].amount <= hasil.leftOver){
                hasil.shoppers.push(shoppers[j].name)
                hasil.leftOver -= shoppers[j].amount
                hasil.totalProfit += shoppers[j].amount * listBarang[i][1]
            }
        }
        hasil2.push(hasil)
    }
    return hasil2
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
// //[ { product: 'Sepatu Stacattu',
// //   shoppers: [ 'Windi', 'Vanessa' ],
// //   leftOver: 5,
// //   totalProfit: 7500000 },
// // { product: 'Baju Zoro',
// //   shoppers: [],
// //   leftOver: 2,
// //   totalProfit: 0 },
// // { product: 'Sweater Uniklooh',
// //   shoppers: [],
// //   leftOver: 1,
// //   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]