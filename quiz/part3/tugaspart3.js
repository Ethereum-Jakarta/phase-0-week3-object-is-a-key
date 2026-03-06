function changeMe(arr) {
  // you can only write your code here!

  // seperti biasa cari index dulu
  for (let i = 0; i < arr.length; i++) {
    // Ambil setiap detail orang
    let firstName = arr[i][0];
    let lastName = arr[i][1];
    let gender = arr[i][2];
    let birthYear = arr[i][3];

    // Hitung umur, jika tidak ada birthYear kembalikan "Invalid Birth Year"
    let age = (birthYear == undefined) ? 'Invalid Birth Year' : 2023 - birthYear;

     console.log(`${i + 1}. ${firstName} ${lastName}: {
      firstName: ${firstName}
      lastName: ${lastName}
      gender: ${gender}
      age: ${age}
    }`);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

//intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

changeMe([]); // ""

/*
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. 
Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

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
  // Sepatu brand Stacattu seharga 1500000
  // Baju brand Zoro seharga 500000
  // Baju brand H&N seharga 250000
  // Sweater brand Uniklooh seharga 175000
  // Casing Handphone seharga 50000

  // buat objek dulu 
  const items = [
    { name: 'Sepatu Stacattu', price: 1500000 },
    { name: 'Baju Zoro', price: 500000 },
    { name: 'Baju H&N', price: 250000 },
    { name: 'Sweater Uniklooh', price: 175000 },
    { name: 'Casing Handphone', price: 50000 }
  ];

  // Jika tidak ada memberId
  if (!memberId) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }

  // Jika uang kurang dari barang termurah
  if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }

  // Buat list untuk menyimpan barang yang dibeli
  let listPurchased = [];
  let changeMoney = money;

  // Iterasi daftar barang dan beli barang yang masih bisa dibeli
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

/*
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). 
Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, 
sisa stock barang dan total pemasukan untuk barang tersebut
*/

function countProfit(shoppers) {
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!

  if (shoppers.length == 0) {
    return [];
  }

  // variable hasil 
  let hasil = [] 

  // buat perulangan untuk menganbil index dari list barang 
  for (let l = 0; l < listBarang.length; l++) {
    // jika sudah buat variable yang akan menyimpan nama nama dari aray list barang 
    let barang = listBarang[l][0] // list yang akan menyimpan sepatu, baju , dan sewater 
    let harga = listBarang[l][1] // list harga yang akan menyimpan harga 
    let stok = listBarang[l][2] // list stok yang akan menampikan semua stok 

    // Objek untuk menyimpan informasi pembelian per produk
    let productInfo = {
      product: barang,
      shoppers: [],
      leftOver: stok,
      totalProfit: 0
    };

    for (let p = 0; p < shoppers.length; p++) {
      // buat variable penampungan buat parameter 
      if (shoppers[p].product === productInfo.product && shoppers[p].amount <= productInfo.leftOver) {
        // pika produk cocok dan stok mencukupi, tambahkan pembeli ke daftar
        productInfo.shoppers.push(shoppers[p].name);
        // Kurangi stok
        productInfo.leftOver -= shoppers[p].amount;
        // Tambahkan keuntungan
        productInfo.totalProfit += shoppers[p].amount * harga;
      }
    }
    
    hasil.push(productInfo);
  }

  return hasil;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
// [ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
