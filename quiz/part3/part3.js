function changeMe(arr) {
  if (arr.length === 0) {
    console.log('""');
    return;
  }
  
  const currentYear = 2023;
  
  for (let i = 0; i < arr.length; i++) {
    let person = arr[i];
    let firstName = person[0];
    let lastName = person[1];
    let gender = person[2];
    let birthYear = person[3];
    
    let age = (birthYear !== undefined) ? currentYear - birthYear : 'Invalid Birth Year';
    
    console.log(`${i + 1}. ${firstName} ${lastName}:`);
    console.log(JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      age: age
    }));
  }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
changeMe([]);

function shoppingTime(memberId, money) {
  if (memberId === '' || memberId === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }
  
  if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  }
  
  const products = [
    { name: 'Sepatu Stacattu', price: 1500000 },
    { name: 'Baju Zoro', price: 500000 },
    { name: 'Baju H&N', price: 250000 },
    { name: 'Sweater Uniklooh', price: 175000 },
    { name: 'Casing Handphone', price: 50000 }
  ];
  
  let listPurchased = [];
  let remainingMoney = money;
  
  for (let product of products) {
    if (remainingMoney >= product.price) {
      listPurchased.push(product.name);
      remainingMoney -= product.price;
    }
  }
  
  return {
    memberId: memberId,
    money: money,
    listPurchased: listPurchased,
    changeMoney: remainingMoney
  };
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());

function countProfit(shoppers) {
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  
  if (shoppers.length === 0) {
    return [];
  }
  
  let result = listBarang.map(item => {
    let productName = item[0];
    let price = item[1];
    let stock = item[2];
    
    let productShoppers = [];
    let leftOver = stock;
    
    for (let shopper of shoppers) {
      if (shopper.product === productName && shopper.amount <= leftOver) {
        productShoppers.push(shopper.name);
        leftOver -= shopper.amount;
      }
    }
    
    let totalProfit = (stock - leftOver) * price;
    
    return {
      product: productName,
      shoppers: productShoppers,
      leftOver: leftOver,
      totalProfit: totalProfit
    };
  });
  
  return result;
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
console.log(countProfit([]));
