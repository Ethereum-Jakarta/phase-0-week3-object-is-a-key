
function shoppingTime(memberId, money) {
    let listItems = [
        [ "Sepatu Stacattu", 1500000 ],
        [ "Baju Zoro", 500000 ],
        [ "Baju H&N", 250000 ],
        [ "Sweater UnikLooh", 175000 ],
        [ "Casing Handphone", 50000 ]
    ]

    if (!memberId) return "Mohon maaf, Toko X hanya berlaku untuk member saja"

    let detail = {}
    let purchased = []
    Object.assign(detail, {
        memberId: memberId,
        money: money,
        ListPurchased: purchased,
    })
    

    for (let i = 0; i < listItems.length; i++) {
        if (money >= listItems[i][1]) {
            purchased.push(listItems[i][0]);
            money = money - listItems[i][1]
            detail.changeMoney = money
        } 
    }
    
    if (purchased.length > 0) {
        return detail;
    } else if(purchased.length === 0) {
        return `Mohon maaf kepada (memberId: ${memberId}), Uang anda tidak cukup!`
    }   
}


console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('234JdhweRxa53', 15000));