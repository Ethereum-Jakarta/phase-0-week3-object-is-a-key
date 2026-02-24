// Soal 1
// js
//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) 
{
  // you can only write your code here!
    let cek = true;

    if (angka < 2)
    {
        cek = false;
    }
    else
    {
        for (let i = 1; i <= angka; i++)
        {
            if (i === 1 || i === angka)
            {
                continue;
            }

            if (angka % i === 0)
            {
                cek = false;
                break;
            }
        }
    }

    return cek;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false