
/*
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }
*/

function shoppingTime(memberId, money) {
  // you can only write your code here!
  let output = {};
  if (memberId === undefined || memberId ==='') {
    output = "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    output = "Mohon maaf, uang tidak cukup";
  } else {
    output.memberId = memberId;
    output.money = money;
    let belanja = [];
    let listBarang = {
        'Sepatu brand Stacattu':1500000,
        'Baju brand Zoro' : 500000,
        'Baju brand H&N' : 250000,
        'Sweater brand Uniklooh' : 175000,
        'Casing Handphone' : 50000
    }
    for (const barang in listBarang) {
        if (money >= listBarang['Sepatu brand Stacattu']) {
            belanja.push('Sepatu brand Stacattu');
            money-=listBarang['Sepatu brand Stacattu'];
        } else if ( money >= listBarang['Baju brand Zoro']) {
            belanja.push('Baju brand Zoro');
            money-=listBarang['Baju brand Zoro'];
        } else if (money >= listBarang['Baju brand H&N']) {
            belanja.push('Baju brand H&N') ;
            money-=listBarang['Baju brand H&N'];
        } else if (money >= listBarang['Sweater brand Uniklooh']) {
            belanja.push('Sweater brand Uniklooh');
            money-=listBarang['Sweater brand Uniklooh'];
        } else if (money >= listBarang['Casing Handphone']) {
            belanja.push("Casing Handphone");
            money-=listBarang['Casing Handphone'];
        }
    }
    //for (let i = 0; i < money;i++) {
    //    if (money >= 1500000) {
    //        belanja.push("SepatuBrand Stacattu");
    //        money-=1500000
    //    } else if (money >= 500000 ) {
    //        belanja.push("Baju Brand Zoro");
    //        money-=500000;
    //    } else if (money >= 250000) {
    //        belanja.push('Baju Brand H&N');
    //        money-= 250000;
    //    } else if (money >= 175000) {
    //        belanja.push("Sweater Brand Uniklooh");
    //        money-= 175000;
    //    } else if (money >= 50000) {
    //        belanja.push("Casing Handphone");
    //        money-=50000;
    //    } else {
    //        kembalian = money;
    //        break;
    //    }
    //}

    output.listPurchased = belanja;
    output.changeMoney = money;
    }
  return output;
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