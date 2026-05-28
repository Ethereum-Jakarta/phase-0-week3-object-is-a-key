let Laptop = {
    "merek":"Lenovo Hack 9",
    "warna":"Hitam",
    "rilis":2024,
    "OS":"Linux",
    "prosesor":"AMD Ultra 9"
};
console.log(`Laptop ${Laptop["merek"]} rilis tahun ${Laptop["rilis"]} dengan dilengkapi prosesor ${Laptop.prosesor}`);
Laptop["ram"] = "256 GB"; // Tambah data ke Laptop
Laptop['storage'] = "16 TB";
Laptop["os"] = "Parrot OS 17.6"; // Bisa juga untuk ganti value
console.log(Laptop.hasOwnProperty("harga")); // buat ngecek apakah key tersebut ada didalam key tersebut.
console.log(Laptop);

for (let key in Laptop)  {
    console.log(`${key} : ${Laptop[key]}`);
}

let pekerjaan = [
    {
        "Nama" : "Cyber Security Engginer",
        "Gaji" : 26000
    },
    {
        "Nama" : "SOC Analyst",
        "Gaji" : 23000
    },
    {
        "Nama" : "Penetration Tester",
        "Gaji" : 29000
    },
    {
        "Nama" : "IT Support",
        "Gaji" : 18000
    },
    {
        "Nama" : "Network Engineer",
        "Gaji" : 21000
    },
    {
        "Nama" :"Blockchain Developer",
        "Gaji" : 29000
    }, 
    {
        "Nama" :  "Pejabat",
        "Gaji" : Infinity // Buat candaan aja wkwkwkwk
    }
    ];

console.log(pekerjaan); 
console.log("\n\n\n"); // Enter dulu biar rapi eaa

let gajiTinggi = pekerjaan.filter(function(a) {
    return a["Gaji"] > 25000;
});

console.log(gajiTinggi);
console.log("\n");

console.log("=========== LIST PEKERJAAN GAJI TINGGI ===========");
console.log("#justkidding :v");
for (let i in gajiTinggi) {
    for (let key of i) {
        console.log(`${i}. ${gajiTinggi[i].Nama} dengan gaji $${gajiTinggi[i]["Gaji"]} USD`)
}
}