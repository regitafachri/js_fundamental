// 1. keyword const vs let
// const angka_satu =8
// const angka_dua = 2
// let hasil // kalo pake const harus ada isinya

// const hasil_tandingan = angka_satu + angka_dua
// hasil = hasil_tandingan // ini re-assign jd tinggal panggil nama variabel nya
// console.log(hasil)

// 2. Data type
const nama = "Yogie"; // string
const umur = 17; // integer
const nominal = 20.5; // double
const isHandsome = true; // boolean -> hanya ada dua yaitu true atau false
const cars = ["honda", "toyota", "mitsubishi"]; // array

const info = {
  address: "jl.semangka",
  city: "Jak",
  Zip_code: 65123,
  isHandsome: true,
  angka: [1, 2, 3, 4]
}; // object 
// address itu key isinya namanya value
// di variable info ada 3 properties

console.log(nama)
console.log(nama + ' ' + umur) // ini mau nampilin > 1 vaiabel
console.log(nama + ' umur saya: ' + umur)
console.log(cars) // ini nampil semua data yang ada dalam array
console.log(cars[1]) // ini cuma mau nampilin toyota, index nya mulai dari 0
console.log(info.city) // ini buat access object jadi pake dot (namavariable.)
console.log(info.city + ' ' + info.angka[3])



