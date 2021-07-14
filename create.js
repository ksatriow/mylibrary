const { book } = require('./models')

book.create({
    kode_buku: 2,
    judul: 'Kotlin Coroutines (1st Edition)',
    kategori: 'Android',
    penulis: 'Babic F, Srivastava N',
    penerbit: 'Razeware LLC',
    bahasa: 'english',
    halaman: 146,
})
.then(book => {
    console.log(book)
})
.catch(err => {
    console.log(err)
})