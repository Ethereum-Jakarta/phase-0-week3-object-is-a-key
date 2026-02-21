// # Logic Challenge Object | Part 3

// Akhirnya ketemu object

// ## Soal 1
// ```js
function changeMe(arr) {
  let firstName = []
  for(i = 0; i < arr.length; i++){
    firstName.push(arr[i][0])
  }
  let lastName = []
  for(j = 0; j < arr.length; j++){
    lastName.push(arr[j][1])
  }
  let fullName = []
  for(k = 0; k < arr.length; k++){
    fullName.push(`${arr[k][0]} ${arr[k][1]}`)
  }
  let gender = []
  for(l = 0; l < arr.length; l++){
    gender.push(arr[l][2])
  }
  let umur = []
  for(m = 0; m < arr.length; m++){
    if(!arr[m][3]){
      umur.push('Invalid Birth Year')
    } else {
      umur.push(2025 - arr[m][3]) // Gua pake 2025 aja tahun sekarang biar lebih enak sir
    }
  }
  
  let result = []
  for(n = 0; n < arr.length; n++){
    result.push(fullName[n], {firstName: firstName[n], lastName: lastName[n], gender: gender[n], umur: umur[n]})
  }

  return result
}

// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

//intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

console.log(changeMe([])); // ""
// ```

// ## Soal 2
// ```js
// /*
// Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. 
// Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

// Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

// Sepatu brand Stacattu seharga 1500000
// Baju brand Zoro seharga 500000
// Baju brand H&N seharga 250000
// Sweater brand Uniklooh seharga 175000
// Casing Handphone seharga 50000
// Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan 
// informasi memberId, money, listPurchased dan changeMoney.

// Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
// Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
// Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu 
// dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
// Contoh jika inputan memberId: '324193hDew2' dan money: 700000

// maka output:

// { memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }
// */

function shoppingTime(memberId, money) {
    let listProduct = [['Casing Handphone', 50000],
                       ['Sweater Uniklooh', 175000],
                       ['Baju H&N', 250000],
                       ['Baju Zoro', 500000],
                       ['Sepatu Stacattu', 1500000]]

    if(!memberId){
        return 'Mohon maaf toko X hanya berlaku untuk member saja'
    } else if(money < 50000){
        return 'Mohon maaf, uang anda tidak cukup'
    }
    let pengeluaran = 0
    let belanja = []
    for(i = 0; i < listProduct.length; i++){
      if(listProduct[i][1] > money){
        break;
      }
      belanja.push(i)
      pengeluaran += listProduct[i][1];
    }
    let namaProduct = []
    for(j = belanja.length - 1; j > -1; j--){
      namaProduct.push(listProduct[j][0])
    }
    let changeMoney = money - pengeluaran
    let result = {memberId, money, listPurchased: namaProduct, changeMoney}
    

    return result
  }
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  // { memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
// { memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
// ```

// ## Soal 3
// ```js
// /*
// Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

// Barang-barang SALE yang akan dihitung penjualannya:

// Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
// Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
// Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
// Function akan menerima array yang berisikan object 
// pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). 
// Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

// Function countProfit akan mengembalikan/me-return sebuah array of object dimana 
// array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, 
// siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut
// */

function countProfit(shoppers) {
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  let sorting = shoppers.sort((a, b) => a.amount - b.amount);
  let SS = [];
  let BZ = [];
  let SU = [];
  let namaSS = [];
  let namaBZ = [];
  let namaSU = [];
  for(i = 0; i < shoppers.length; i++){
    if(sorting[i].product === 'Sepatu Stacattu'){
      SS.push(sorting[i].amount);
    } else if(sorting[i].product === 'Baju Zoro'){
      BZ.push(sorting[i].amount);
    } else if(sorting[i].product === 'Sweater Uniklooh'){
      SU.push(sorting[i].amount);
    }
  }
  let totalSS = 0;
  let totalBZ = 0;
  let totalSU = 0;
  for(j = 0; j < SS.length; j++){
    if(SS[j] > listBarang[0][2]){
      break;
    }
    namaSS.push(sorting[j].name);
    totalSS += SS[j]
  }
  for(k = 0; k < BZ.length; k++){
    if(BZ[k] > listBarang[1][2]){
      break;
    }
    namaBZ.push(sorting[k].name);
    totalBZ += BZ[k]
  }
  for(l = 0; l < SU.length; l++){
    if(SU[l] > listBarang[2][2]){
      break;
    }
    namaSU.push(sorting[l].name);
    totalSU += SU[l];
  }
  let totalSemua = [SS, BZ, SU]
  let sisaSS = listBarang[0][2] - totalSS
  let sisaBZ = listBarang[1][2] - totalBZ
  let sisaSU = listBarang[2][2] - totalSU
  let profitSS = totalSS * listBarang[0][1]
  let profitBZ = totalBZ * listBarang[1][1]
  let profitSU = totalSU * listBarang[2][1]
  let result = [{
      product: 'Sepatu Stacattu',
      shoppers: namaSS,
      leftOver: sisaSS,
      totalProfit: profitSS
      },
      {
      product: 'Baju Zoro',
      shoppers: namaBZ,
      leftOver: sisaBZ,
      totalProfit: profitBZ
      },
      {
      product: 'Sweater Uniklooh',
      shoppers: namaSU,
      leftOver: sisaSU,
      totalProfit: profitSU
      }
    ]

  return result
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
// ```