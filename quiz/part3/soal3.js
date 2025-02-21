function countProfit(shoppers) {
  var listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1],
  ];

  if (shoppers.length === 0) {
    return [];
  }

  const hasil = [
    {
      product: "Sepatu Stacattu",
      shoppers: [],
      leftOver: 10,
      totalProfit: 0,
    },
    {
      product: "Baju Zoro",
      shoppers: [],
      leftOver: 2,
      totalProfit: 0,
    },
    {
      product: "Sweater Uniklooh",
      shoppers: [],
      leftOver: 1,
      totalProfit: 0,
    },
  ];

  for (let i = 0; i < shoppers.length; i++) {
    let buyer = shoppers[i];
    // Loop tiap produk di hasil
    for (let j = 0; j < hasil.length; j++) {
      // Cek apakah produk yang ingin dibeli sama dengan produk di hasil
      if (buyer.product === hasil[j].product) {
        if (hasil[j].leftOver >= buyer.amount) {
          hasil[j].shoppers.push(buyer.name);
          hasil[j].leftOver -= buyer.amount;
          // Hitung profit berdasarkan harga produk dan jumlah yang dibeli
          let price = listBarang[j][1];
          hasil[j].totalProfit += buyer.amount * price;
        }
      }
    }
  }

  return hasil;
}

// TEST CASES
console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 },
  ])
);
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

console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
    { name: "Devi", product: "Baju Zoro", amount: 1 },
    { name: "Lisa", product: "Baju Zoro", amount: 1 },
  ])
);
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
