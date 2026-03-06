let myData = {
  nama: "aurelio",
  nim: 22330303,
  detail: {
    lokasi: "medan",
    hobi: "renang",
  },
};

// munculkan data Object
console.log(myData);

// manipulasi data
myData.kelas = "4 Malam A";
console.log(myData);

// akses data object yang di dalam ada object lagi
console.log(`Aksesk object ${myData.detail.hobi}`);

//
let angka = {};
for (let i = 0; i <= 5; i++) {
  angka[i] = `Index - ${i}`;
}
console.log(angka);

// delete object
delete myData.kelas;
console.log(myData);

// loop khusus object
for (const key in myData) console.log(`${key} = ${myData[key]}`);

console.log("===========================");

// Looping to new Data
let dataOld = [
  ["Nanda", "Ola"],
  ["Negeri 4", "Methodist"],
];
let newData = [];

for (let i = 0; i < dataOld.length; i++) {
  let data = {
    name: dataOld[i][0],
    school: dataOld[i][1],
  };
  newData.push(data);
}

console.log(newData);
