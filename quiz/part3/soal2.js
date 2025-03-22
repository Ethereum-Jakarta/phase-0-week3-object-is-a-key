function shoppingTime(memberId, money) {
    if (!memberId){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    if (money < 50000){
        return 'Mohon maaf, uang tidak cukup';
    }

    let item = [
        {namaBarang : 'Sepatu Stascattu', harga : 1500000},
        {namaBarang : 'Baju Zoro', harga : 500000},
        {namaBarang : 'Baju H&N', harga : 250000},
        {namaBarang : 'Sweater Uniklooh', harga : 175000},
        {namaBarang : 'Sepatu Stascattu', harga : 50000}
    ];

    let listItem = []
    let uang = money

    for (let i = 0; i < item.length; i++){
        if (uang >= item[i].harga){
            listItem.push(item[i].namaBarang)
            uang -= item[i].harga
        }
    }

    return {
        memberId : memberId,
        money : money,
        listItem : listItem,
        uang : uang
    }


}

  // TEST CASES
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