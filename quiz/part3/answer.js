console.log("Soal ke-1:");
function changeMe(arr) {
    let result = {}

    for (let i = 0; i < arr.length; i++) {
        let person = arr[i];
        console.log(person)
        let fullName = person[0] + " " + person[1];
        // console.log("fullName:", fullName)
        let age = (person[3]) ? new Date().getFullYear() - person[3] : "Invalid Birth Year"

        result[fullName] = {
            firstName: person[0],
            lastName: person[1],
            gender: person[2],
            age: age
        }
    }
    // return result;
}

console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]));
// Christ Evans: {
//     firstName: 'Christ',
//         lastName: 'Evans',
//             gender: 'Male',
//                 age: 41
// } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: {
//     firstName: 'Robert',
//         lastName: 'Downey',
//             gender: 'Male',
//                 age: 'Invalid Birth Year'
// }

// console.log("Soal ke-2:");
// function shoppingTime(memberId, money) {
//     const barang = [
//         ["Sepatu brand Stacattu", 1500000],
//         ["Baju brand zoro", 500000],
//         ["Baju brand H&N", 250000],
//         ["Sweater brand Uniklooh", 175000],
//         ["Casing Handphone", 50000]
//     ]

//     if (memberId === undefined) {
//         return "Mohon maaf, toko X hanya berlaku untuk member saja."
//     }

//     if (money < 50000) {
//         return "Mohon maaf, uang tidak cukup."
//     }

//     let list = []
//     let changeMoney = money
//     for (let i = 0; i < barang.length; i++) {
//         // console.log(barang[i])
//         // console.log(barang[i][j])
//         if (money >= barang[i][1]) {
//             list.push(barang[i][0]);
//             changeMoney -= barang[i][1]
//         }

//     }

//     return {
//         memberId: memberId,
//         money: money,
//         listPurchased: list,
//         changeMoney: changeMoney
//     }

// }

// console.log(shoppingTime('1820RzKrnWn08', 2475000));
// console.log(shoppingTime('82Ku8Ma742', 170000));
// console.log(shoppingTime('234JdhweRxa53', 15000));
// console.log(shoppingTime());

console.log("Soal ke-3:");
function countProfit(shoppers) {
    // console.log("param:", shoppers)
    var listBarang = [
        ["Sepatu Stacattu", 1500000, 10],
        ["Baju Zoro", 500000, 2],
        ["Sweater Uniklooh", 175000, 1]
    ];

    let result = []

    for (let i = 0; i < listBarang.length; i++) {
        let item = listBarang[i][0];
        let priceItem = listBarang[i][1];
        let amountItem = listBarang[i][2];

        // console.log(`item: ${item}, price: ${priceItem}, amount: ${amountItem}`)
        let buyers = [];
        let leftOver = amountItem;
        let profit = 0;

        for (let j = 0; j < shoppers.length; j++) {
            // console.log("looping:", shoppers[i])
            let user = shoppers[j].name;
            // console.log(user)
            let buy = shoppers[j].product;
            let amount = shoppers[j].amount;

            if (buy === item && amount <= leftOver) {
                buyers.push(user);
                leftOver -= amount;
                profit += amount * priceItem;
            }
            // console.log(listBarang[i][j])
        }
        result.push({
            product: item,
            shoppers: buyers,
            leftOver: leftOver,
            totalProfit: profit
        })
    }

    return result
}

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
