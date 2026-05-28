//🧪 Latihan: Cari Sendiri!
//Tanpa liat materi sebelumnya, cari di MDN dan jawab pertanyaan ini:
//
//1. Apa return value dari Array.prototype.splice()?
//2. Apa bedanya String.slice() sama String.substring()?
//3. Gimana cara convert "123" (string) jadi 123 (number)?
//4. Method apa yang bisa cek apakah suatu string dimulai dengan kata tertentu?
//5. Apa itu Array.prototype.find() dan apa bedanya sama filter()?

// JAWABAN
//1. An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
//2. Secara gampangnya slice() mendukung index negatif sedangkan substring() tidak mendukung index negatif.
//3. menggunakan Number("123"); atau jika strings ada didalam variabel namaVarStr Number(namaVarStr);
//4. menggunakan startswith(). contohnya mencari kata yang diawali "Hai" didalam variabel namaVariabel  maka namaVariabel.startswith("Hai");
//5. if search fails, find() will returns "undefined" while filter() fail will returns an empty array "[]"
