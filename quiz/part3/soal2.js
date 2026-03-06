function shoppingTime(memberId, money) {
    if (!memberId) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja' //Jika tidak ada member id
    } else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup' //Jika uangnya kurang dari 50k
    }

    let barang = [ //Buat array agar eksekusi lebih mudah
        {name: 'Sepatu Stacattu', price: 1500000},
        {name: 'Baju Zoro', price: 500000},
        {name: 'Baju H&N', price: 250000}, 
        {name: 'Sweater Uniklooh', price: 175000},
        {name: 'Casing Handphone', price: 50000}
    ]

    let listPurchased = []; //Array kosong untuk menampung barang yg dibeli
    let changeMoney = money; //untuk menampung variable money

    for (let i = 0; i < barang.length; i++) {
        if (changeMoney >= barang[i].price) { //untuk mengecek apakah uangnya lebih dari list barang
            listPurchased.push(barang[i].name) //Untuk menambahkan barang yang dibeli ke array kosong tdi
            changeMoney -= barang[i].price //Mengurangi uang yg telah dipakai
        }
    }
    return {
        memberId: memberId,
        money: money,
        listPurchased: listPurchased,
        changeMoney: changeMoney
    };
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