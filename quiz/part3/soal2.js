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
  if (!memberId) return "Mohon maaf, toko X hanya berlaku untuk member saja";
  if (money < 50000) return "Mohon maaf, uang tidak cukup";

  // etalase
  let etalase = [
    {id: 1, name: "Sepatu Stacattu", price: 1_500_000, sale: 0},
    {id: 2, name: "Baju Zoro", price: 500_000, sale: 0},
    {id: 3, name: "Baju H&N", price: 250_000, sale: 0},
    {id: 4, name: "Sweater Uniklooh", price: 175_000, sale: 0},
    {id: 5, name: "Casing Handphone", price: 50_000, sale: 0},
  ];
  
  // variabel untuk menampung sisa money 
  // dan list produk yang dibeli setelah belanja
  let sisa_money = money;
  let listPurchased = [];
  
  // looping terus berjalan hingga uang habis
  for (let i = 0; ; i++) {
    let masih_bisa_beli = false;

    // cek etalase produk, apakah ada barang paling mahal yang masih bisa dibeli
    for (const product of etalase) {
      // cek apakah harga produk affordable (kurang dari atau sama dengan sisa money)
      if (product.price <= sisa_money) {
        // cegah member untuk membeli barang yang sama lebih dari 1
        if (product.sale === 1) continue;
        
        // jalankan logika bisnis yaitu kurangi sisa money member dengan harga produk
        sisa_money -= product.price;
        
        // tambahkan produk sale agar bisa di cek apakah member 
        // sudah pernah membeli produk atau tidak
        product.sale += 1;

        // tambahkan produk yang dibeli kedalam keranjang atau listPurchased
        listPurchased.push(product.name);

        // member masih bisa membeli produk, terbukti dia masih bisa 
        // menambahkan produk ini ke keranjang belanjanya
        masih_bisa_beli = true;
        break;
      }
    }

    // stop looping jika member sudah tak mampu atau tak diperbolehkan lagi untuk berbelanja
    if (masih_bisa_beli === false) break;
  }

  // kembalikan hasilnya (mirip invoice bjir)
  return {memberId, money, listPurchased, changeMoney: sisa_money};
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