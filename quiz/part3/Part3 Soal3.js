function countProfit(shoppers) {
  var listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1],
  ];

  if (shoppers.length === 0) {
    return [];
  }

  let result = [];

  for (let i = 0; i < listBarang.length; i++) {
    let productName = listBarang[i][0];
    let price = listBarang[i][1];
    let stock = listBarang[i][2];

    let obj = {
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
    };

    for (let j = 0; j < shoppers.length; j++) {
      let buyer = shoppers[j];

      if (buyer.product === productName && buyer.amount <= obj.leftOver) {
        obj.shoppers.push(buyer.name);
        obj.leftOver -= buyer.amount;
        obj.totalProfit += buyer.amount * price;
      }
    }

    result.push(obj);
  }

  return result;
}

console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 },
  ])
);

console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
    { name: "Devi", product: "Baju Zoro", amount: 1 },
    { name: "Lisa", product: "Baju Zoro", amount: 1 },
  ])
);

console.log(
  countProfit([{ name: "Windi", product: "Sepatu Naiki", amount: 5 }])
);

console.log(countProfit([]));
