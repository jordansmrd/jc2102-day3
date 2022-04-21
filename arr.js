// ..continue //lanjut
// ..break //berhenti


// for(let i=0;i < 5; i++)
// {
//     //skip jika angkanya 3 
//     if(i == 3)
//     {
//         continue //continue = skip task to modifier
//     }
//     else if(i == 4)
//     {
//         break 
//     }
//     console.log(i)
// }
//continue = skip task to modifier


let buku1 = 'Komik Naruto'
let buku2 = 'Komik shinchan'
let buku3 = 'Komik bleach'


const books = [ buku1, buku2, buku3]
books[0] = 'buku pengganti'
books[3] = 'buku tambahan'
// books[5] = 'index ke 5' //dianggap array memiliki index ke 5, sehingga 

// books = 1 // ga bisa reassign
// const books = 1 // ga bisa redeclare

// var things = ['pen', 'books', 'clock']


console.log(books)

console.log(books.indexOf('buku serigala', 'buku 3'))

console.log(books.slice(1,3)) //start index, length 
//           0                 1              2              3            
// [ 'buku pengganti', 'Komik shinchan', 'Komik bleach', 'buku tambahan' ]
//         1                   2               3               4   
     



//tampilkan total kategori dan kategori apa saja pada sebuah film dan jangan lupa 
//kategori harus diurutkan berdasarkan alphabeth


const categories = ['Horror', 'Sci-fi', 'Thriller', 'Adventure', 'Animation']// declare array
categories.reverse() // sort
let info = `Terdapat ${categories.length} kategori film `
for(let i = 0;i < categories.length; i++ )
{
    info += '\n ' +  categories[i]  
}
console.log(info)


const names = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"]
//sort descending
console.log(names.sort().reverse())
console.log(names[0])

const box  = [
    ["red pen", "blue pen"],
    ["analog clock" , "digital clock" , "smart watch"]
]
console.log('array index pertama adalah '+ box[1] + ' ')
console.log('array index kedua dengan mengakses index 1 adalah ' + box[1][1] + ' ')

