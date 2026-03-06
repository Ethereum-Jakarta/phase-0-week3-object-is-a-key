const myObj = {
    nama: 'bryan',
    kelas: '12',
    hobbi: ['main', 'makan', 'tidur'],
    detail: {
      tinggi: 185,
      berat: 60
    }
  };

// console.log(myObj)
// console.log(myObj.nama)
// console.log(myObj.kelas)
// console.log(myObj.hobbi[1])
// console.log(myObj.detail.tinggi)
// const detail = myObj.detail;

// console.log(detail.berat)

myObj.kelakuan = 'baik';
//atau bisa seperti ini
myObj['isNolep'] = true;

//atau dengan loop
let objAngka = {};
for (let i = 1; i <= 3; i++) {
  objAngka[i] = i
}
console.log(objAngka)

delete myObj.isNolep; //atau delete myObj['isNolep'];

let studentDatas = [['John', 'Doe'], ['Joe', 'Anna']]
let newStudentDatas = [['Joan', 'Park'],["Mountain",'Name']];

for (let i = 0; i < studentDatas.length; i++) {
    let data = {
        firstName: studentDatas[i][0],
        lastName: studentDatas[i][1],
    }

    newStudentDatas.push(data)
}

console.log(newStudentDatas)