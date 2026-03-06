function changeMe(arr) {
    if (arr.length === 0) {
      console.log("");
      return;
    }
  
    for (let i = 0; i < arr.length; i++) {
      let [firstName, lastName, gender, birthYear] = arr[i];
      let age = birthYear ? 2023 - birthYear : "Invalid Birth Year";
  
      let person = {
        firstName,
        lastName,
        gender,
        age
      };
  
      console.log(`${i + 1}. ${firstName} ${lastName}:`, person);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  changeMe([]);
  
  function shoppingTime(memberId, money) {
    if (!memberId) return "Mohon maaf, toko X hanya berlaku untuk member saja";
    if (money < 50000) return "Mohon maaf, uang tidak cukup";
  
    let items = [
      { name: "Sepatu Stacattu", price: 1500000 },
      { name: "Baju Zoro", price: 500000 },
      { name: "Baju H&N", price: 250000 },
      { name: "Sweater Uniklooh", price: 175000 },
      { name: "Casing Handphone", price: 50000 },
    ];
  
    let listPurchased = [];
    let changeMoney = money;
  
    for (let item of items) {
      if (changeMoney >= item.price) {
        listPurchased.push(item.name);
        changeMoney -= item.price;
      }
    }
  
    return {
      memberId,
      money,
      listPurchased,
      changeMoney,
    };
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
  console.log(shoppingTime('82Ku8Ma742', 170000));
  console.log(shoppingTime('', 2475000));
  console.log(shoppingTime('234JdhweRxa53', 15000));
  console.log(shoppingTime());

  function countProfit(shoppers) {
    let listBarang = [
      { product: "Sepatu Stacattu", price: 1500000, stock: 10 },
      { product: "Baju Zoro", price: 500000, stock: 2 },
      { product: "Sweater Uniklooh", price: 175000, stock: 1 }
    ];
  
    if (shoppers.length === 0) return [];
  
    let result = listBarang.map(item => {
      let buyers = [];
      let leftOver = item.stock;
      let totalProfit = 0;
  
      for (let shopper of shoppers) {
        if (shopper.product === item.product && shopper.amount <= leftOver) {
          buyers.push(shopper.name);
          leftOver -= shopper.amount;
          totalProfit += shopper.amount * item.price;
        }
      }
  
      return {
        product: item.product,
        shoppers: buyers,
        leftOver,
        totalProfit
      };
    });
  
    return result;
  }
  
  // TEST CASES
  console.log(countProfit([
    { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
    { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
    { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
  ]));
  
  console.log(countProfit([
    { name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
    { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
    { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
    { name: 'Devi', product: 'Baju Zoro', amount: 1 },
    { name: 'Lisa', product: 'Baju Zoro', amount: 1 }
  ]));
  
  console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
  console.log(countProfit([]));
  