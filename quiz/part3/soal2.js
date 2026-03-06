function shoppingTime(memberId, money) {
    let listPurchased = [];
    let hasil = {
        memberId: memberId,
        money: money,
        listPurchased: listPurchased,
    }

    let barang = {
        "Sepatu brand Stacattu": 1500000,
        "Baju brand Zoro": 500000,
        "Baju brand H&M": 250000,
        "Sweater brand Uniklooh": 175000,
        "Casing Handphone": 50000,
    }

    if(!memberId) return "Mohon maaf, toko X hanya berlaku untuk member saja";

    for (key in barang){
        if(money - barang[key] >= 0){
            listPurchased.push(key);
            money = money - barang[key];
            hasil.changeMoney = money;
        }
    }
    if(hasil.listPurchased.length === 0) return "Mohon maaf, uang tidak cukup"

    return hasil
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja