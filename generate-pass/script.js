// Mengseleksi input dan btn
const generateBtn = document.getElementById("generateBtn");
const sumGenerate = document.getElementById("sumGenerate");
const outputPass = document.getElementById("outputPass");
const openPass = document.getElementById("open");
const savePassword = document.getElementById("savePassword");

function generatePassword(leng) {
 // Membuat var yang isinya karakter yang akan dipanggil random oleh komputer.
 const lowerAphabet = "abcdefghijklmnopqrstuvwxyz";
 const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const numeric = "0123456789";
 const symbol = "!@#$%^&*()_+{}|[]:;'<>?/-=~`";

 //  memasukkan semua var karakter kedalam var data
 const data = lowerAphabet + upperAlphabet + numeric + symbol;

 //  Mengisi var kosong yang nantinya akan di isi oleh output dari random komputer dibawah ini
 let generator = "";

 //  Melakukan pengulangan, sebanyak yang ditentukan oleh user
 for (let i = 0; i < leng; i++) {
  // isi dari var data diambil menggunakan bracket notation ( data[] ), yang dimana isi dari data akan dipanggil sesuai dengan operasi yang ada di dalam nya.
  // Math.floor = untuk pembulatan.
  // Math random =  untuk angka random, yang hanya memiliki range 0 - 1 (nol sampai satu).
  // data.length = untuk mengukur total keseluruhan huruf yang ada di dalam var data.
  // setelah itu akan dimasukkan kedalam var generator
  generator += data[Math.floor(Math.random() * data.length)];
 }

 //  Mengembalikan nilai dari generator
 return generator;
}

// Membuat listener click pada btn, yang jika diclick dia akan menjalankan function get password;
generateBtn.addEventListener("click", getPassword);

function getPassword() {
 if (sumGenerate.value.length == 0 || sumGenerate.value <= 0) {
  alert("No content on value!");
  throw new Error("No content on value!");
 } else if (sumGenerate.value > 0 && sumGenerate.value <= 100) {
  sumGenerate.value.parseInt;
 } else if (sumGenerate.value > 100) {
  alert('"Value Undefined');
  throw new Error("Value Undefined");
 } else if (typeof sumGenerate.value == "string") {
  alert("The value must be int!");
  throw new Error("The value must be int!");
 }

 // memanggil function generatePassword dengan parameter sumGenerate yang diambil valuenya saja, setelah itu dia akan masuk kedalam var outputGenerate.
 const outputGenerate = generatePassword(sumGenerate.value);

 //  hasil dari outputGenerate akan dimasukkan kedalam outputPass di bagian valuenya yang akan terganti.
 outputPass.value = outputGenerate;
}

openPass.addEventListener("click", open);

function open() {
 if (outputPass.type == "password") {
  outputPass.type = "text";
 } else {
  outputPass.type = "password";
 }
}

savePassword.addEventListener("click", savePass);

function savePass() {
 document.title = outputPass.value;
 outputPass.setAttribute("value", document.title);
 outputPass.select(), document.execCommand("copy");

 setTimeout(() => {
  alert("Successfully Saved on clipboard!");
 }, 100);
}
