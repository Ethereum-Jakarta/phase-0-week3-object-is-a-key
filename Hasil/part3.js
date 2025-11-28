function changeMe(arr) {
for (let i = 0; i < arr.length; i++) {
let Person = {} 

Person.firstname = arr[i][0]
Person.lastname = arr[i][1]
Person.gender = arr[i][2]

if (arr[i][3] && typeof arr[i][3]=== 'number') { //typeof arr[i][3]=== 'number' untuk mengecek apakah angka tersebut adalah number atau tidak
    Person.age = 2025 - arr[i][3];
} else {
    Person.age = `invalid Birth year`
}
console.log(`${Person.firstname} ${Person.lastname}:`, Person);
}
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 


function shoppingTime(memberId, money) {
  if (memberId === `` || memberId === undefined) {
    return `mohon maaf, toko X hanya berlaku untuk member saja`
  }

  if (money === 0) {
    return `mohon maaf, uang tidak cukup`
  }
  let listPurchased = []
  let remainingMoney = money

let items = [
    {name: `Sepatu Stacattu:`, price: 1500000},
    { name: 'Baju Zoro', price: 500000 },
    { name: 'Baju H&N', price: 250000 },
    { name: 'Sweater Uniklooh', price: 175000 },
    { name: 'Casing Handphone', price: 50000 }
  ]

  for (let item of items) {
    if (remainingMoney >= item.price) {
        listPurchased.push(item.name)
        remainingMoney -= item.price
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

  let result = [];
  if (result === 0) {
    return [];
  }

  for (let item of listBarang) {
    result.push({
        product : item[0],
        shoppers: [],
        leftOver: item[2],
        totalprofit: 0
    })
  }

  for (let shopper of shoppers) {
    let found = result.find(r => r.product === shopper.product);
    if (found && found.leftOver >= shopper.amount) {
        found.shoppers.push(shopper.name);
        found.leftOver -= shopper.amount;

        let itemdata = listBarang.find(l => l[0] === shopper.product);
        found.totalprofit += shopper.amount * itemdata[1]; 
    }
  }
  return result
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
    {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
    {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
     {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
     {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
     {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
     {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
console.log(countProfit([])); //[]