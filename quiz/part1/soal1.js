//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    // you can only write your code here!
    if (angka > 1) {        //angka prima lebih dari 1
        let cek;
        for (let i = 2; i < angka; i++) {   //membagi angka prima dengan angka sebelumnya
            cek = angka % i;
            if (cek == 0) {         //jika angka habis dibagi suatu angka maka loop berhenti
                break;
            }
        }
        if (cek == 0) {     //cek bilangan prima atau bukan
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false