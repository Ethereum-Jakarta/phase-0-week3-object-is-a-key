// membuat Object

let myObject = {
    nama: 'Dhaffa',
    kelas: 12,
    umur: 13,
    pacar: ["realkah", "animekah", "atau kamu"],
    bisaNggak: {
        bisa: "tapi mati",
        nggak: "juga mati"
    }
};

console.log(myObject.nama);

console.log(myObject['nama'], myObject['umur']);
console.log(myObject['bisaNggak']['bisa'])


let objBaru = {};

objBaru[`nama`] = "Dhaffa";



// for(let i = 0; i < 5; i++) {
//     objBaru[`Ke-${i}`] = "anjay";
// }

console.log(objBaru);