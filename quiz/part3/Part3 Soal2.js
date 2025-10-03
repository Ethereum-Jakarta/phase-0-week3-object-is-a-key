function shoppingTime(memberId, money) {
  if (!memberId) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
  if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }

  let saleItems = [
    ["Sepatu Stacattu", 1500000],
    ["Baju Zoro", 500000],
    ["Baju H&N", 250000],
    ["Sweater Uniklooh", 175000],
    ["Casing Handphone", 50000],
  ];

  let listPurchased = [];
  let sisaUang = money;

  for (let i = 0; i < saleItems.length; i++) {
    let item = saleItems[i][0];
    let harga = saleItems[i][1];
    if (sisaUang >= harga) {
      listPurchased.push(item);
      sisaUang -= harga;
    }
  }

  return {
    memberId: memberId,
    money: money,
    listPurchased: listPurchased,
    changeMoney: sisaUang,
  };
}

console.log(shoppingTime("1820RzKrnWn08", 2475000));

console.log(shoppingTime("82Ku8Ma742", 170000));

console.log(shoppingTime("", 2475000));

console.log(shoppingTime("234JdhweRxa53", 15000));

console.log(shoppingTime());
