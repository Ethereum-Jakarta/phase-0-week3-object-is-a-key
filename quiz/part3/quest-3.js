
function countProfit(shoppers) {
    var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];

    let data = [
        { 
            // Sepatu Stacattu
            product: listBarang[0][0],
            shoppers: [],
            leftOver: listBarang[0][2],
            totalProfit: 0,
        },
        { 
            // Baju Zoro
            product: listBarang[1][0],
            shoppers: [],
            leftOver: listBarang[1][2],
            totalProfit: 0,
        },
        { 
            // Sweater UnikLooh
            product: listBarang[2][0],
            shoppers: [],
            leftOver: listBarang[2][2],
            totalProfit: 0,
        },
    ]

    for (let i = 0; i < listBarang.length; i++) {
        for (let j = 0; j < shoppers.length; j++) {
            if (data[i].product === shoppers[j].product) {
                if (data[i].leftOver >= shoppers[j].amount) {
                    if (shoppers[j].amount) {
                        data[i].shoppers.push(shoppers[j].name);
                    }
                    data[i].leftOver = data[i].leftOver - shoppers[j].amount; 
                    data[i].totalProfit = listBarang[i][1] * (listBarang[i][2] - [data[i].leftOver]);
                } else if (data[i].leftOver < shoppers[j].amount) {
                    data[i].shoppers.push()
                }
            }
        }
    }

    if (shoppers.length === 0) return []
    return data
    
  }

  console.log(countProfit([
    {name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
    {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
    {name: 'Terry', product: 'Baju Zoro', amount: 0}, 
    {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));


// console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));

// console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));

// console.log(countProfit([])); //[]