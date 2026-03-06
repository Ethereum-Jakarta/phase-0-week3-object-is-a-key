function shoppingTime(memberId, money) {
  if (!memberId || memberId === "") {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
  if (money === undefined || money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }

  const barangSale = [
    { nama: "Sepatu Stacattu", harga: 1500000 },
    { nama: "Baju Zoro", harga: 500000 },
    { nama: "Baju H&N", harga: 250000 },
    { nama: "Sweater Uniklooh", harga: 175000 },
    { nama: "Casing Handphone", harga: 50000 },
  ];

  const result = {
    memberId: memberId,
    money: money,
    listPurchased: [],
    changeMoney: money,
  };

  for (let i = 0; i < barangSale.length; i++) {
    if (result.changeMoney >= barangSale[i].harga) {
      result.listPurchased.push(barangSale[i].nama);
      result.changeMoney -= barangSale[i].harga;
    }
  }

  return result;
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
