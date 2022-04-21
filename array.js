
//break
let kumpulanAngka =  ""
for(let i = 1; i<= 5; i++ )
{
    kumpulanAngka += i + " "
if(i == 3) //stop looping apabila nilai angka = 3
{
break
}
}
console.log('kumpulan angka = ' + kumpulanAngka)


for(let i = 1; i<= 5; i++ )
{
kumpulanAngka += i + " "
if(i == 3) //stop looping apabila nilai angka = 3
{
break
}
}

//continue

//kenapa pakai const? karena nilai array biasanya adalah tetap dan tidak di reassign/redeclare
//var atau let pd array tidak masalah 

const books = ["Harry Potter", "Twilight", "Naruto"] 
//An array declared with const cannot be reassigned:
// Elements Can be Reassigned


//access array properties
console.log('panjang array ' + books.length) // panjang array


books.push("Kimetsu No Yaiba") //add array
books.pop() //delete last array


console.log( 'urutan index ke ' + books.indexOf( 'Twilight') )// cari index ke berapa


for(let i = 0;i< books.length;i++)
{
  console.log(books[i])  
}
console.log(books)

const numbers = [1,2,3,4,5]

numbers.push(6)//add to array
console.log(numbers)


//contoh ingin menghapus nomor 2 dan 3
numbers.splice(1,2, 6 , 7,8) //(index, brp bnyk yg didelete dari index tersebut , insert element berdasarkan index yg dipilih diawal)

console.log(numbers)


console.log(numbers.sort())  // sorting array numbers
console.log(numbers.reverse())  // sorting array numbers

delete numbers[0]
delete numbers[1]
console.log(numbers)


const sentence = "Halo selamat datang di rumah saya"


 // value yang diisi dari split menjadi pemisah saat menjadikan variable tsb menjadi array
console.log(sentence.split(" "))

//menggabungkan 2 array
const ScienceBooks = ['buku fisika', 'buku kimia', 'buku biology']
const ComicBooks = ['Naruto', 'Bleach', 'One Piece']
const AccountingBooks = ['Buku belajar finance', 'Buku akunting pemula']

const BookShelf = ScienceBooks.concat(ComicBooks, AccountingBooks)

console.log(BookShelf)


const angka = [4, 9, 16, 25];
const newArr = angka.map(Math.sqrt) //akar 

console.log(newArr)


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(0, 3); //mengambil element dari sebuah array (startindex, berapa banyak element)
console.log(citrus)
    

fruits.unshift("Lemon","Pineapple")// add element to the first index
console.log(fruits)

fruits.shift() //remove the first element
console.log(fruits)


console.log('kumpulan buah mengandung Lemon? ' + fruits.includes('Lemon'))

console.log(fruits.join("/"))
console.log(typeof(fruits.join("/")))


//dimensional array

const things  = [
    ["red pen", "blue pen"],
    ["analog clock" , "digital clock" , "smart watch"]
]
console.log('array index pertama adalah '+ things[1] + ' ')
console.log('array index kedua dengan mengakses index 1 adalah ' + things[1][1] + ' ')
for(let i = 0;i< things.length;i++ )
{
    for(let k = 0;k< things[i].length;k++ )
    {
    console.log('nilai dari  index ' + things[i][k])
    }
}


//exercise film
let kategoris = ['Horror' , 'Sci-fi', 'Thriller', 'Romance', 'Adventure']
kategoris.sort()
let info = `terdapat ${kategoris.length} untuk film \n`

for(let i = 0; i < kategoris.length; i++)
{
 info += ` ${kategoris[i]} \n`   
}
console.log(info)