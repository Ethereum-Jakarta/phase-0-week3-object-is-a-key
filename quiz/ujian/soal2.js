// Soal 2
// js
/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) 
{
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here

    if (arrPenumpang.length < 1)
    {
        return [];
    }

    let listPenumpangBayarRute = [];
    for (let i = 0; i < arrPenumpang.length; i++)
    {
        let tempPenumpangBayarRute =
        {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2]
        };

        listPenumpangBayarRute.push(tempPenumpangBayarRute);
    }

    for (let i = 0; i < listPenumpangBayarRute.length; i++)
    {
        let cek = false;
        let indeksAwal = -1;
        for (let j = 0; j < rute.length; j++)
        {
            if (cek)
            {
                if (rute[j] === listPenumpangBayarRute[i].tujuan)
                {
                    listPenumpangBayarRute[i].bayar = (j - indeksAwal) * 2000;
                    break;
                }
            }

            if (rute[j] === listPenumpangBayarRute[i].naikDari && cek === false)
            {
                indeksAwal = j;
                cek = true;
            }

        }
    }

    return listPenumpangBayarRute;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]