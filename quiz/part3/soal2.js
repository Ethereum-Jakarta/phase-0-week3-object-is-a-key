function shoppingTime(memberId, money) {
  if (!memberId || memberId === "") {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
  if (money === undefined || money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }

  const items = [
    { name: "Sepatu Stacattu", price: 1500000 },
    { name: "Baju Zoro", price: 500000 },
    { name: "Baju H&N", price: 250000 },
    { name: "Sweater Uniklooh", price: 175000 },
    { name: "Casing Handphone", price: 50000 },
  ];

  let listPurchased = [];
  let changeMoney = money;

  for (let i = 0; i < items.length; i++) {
    if (changeMoney >= items[i].price) {
      listPurchased.push(items[i].name);
      changeMoney -= items[i].price;
    }
  }

  return {
    memberId: memberId,
    money: money,
    listPurchased: listPurchased,
    changeMoney: changeMoney,
  };
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
console.log(shoppingTime("82Ku8Ma742", 170000));
console.log(shoppingTime("", 2475000));
console.log(shoppingTime("234JdhweRxa53", 15000));
console.log(shoppingTime());
