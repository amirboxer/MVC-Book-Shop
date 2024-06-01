'use strict'

// Basic model
//{
//    id: bg4J78,
//    title: 'The adventures of Lori Ipsi',
//    price: 120,
//    imgUrl: 'lori-ipsi.jpg'
//    }
//    1

'use strict'

var gBooks = [
    { id: 'df45ef', title: 'The Advantures of lori Ipsi', price: 120, imgUrl: null },
    { id: 'dj45kd', title: 'World Atlas', price: 300, imgUrl: null },
    { id: 'bnsk53', title: 'Zorba the Greek', price: 87, imgUrl: null }
]

function getBooks() {
    return gBooks
}

function _createBookObj(title, price, imgUrl = null) {
    var book =  {
        id: generateId(),
        title,
        price,
        imgUrl
    }
    return book
}

function removeBook(bookId) {
    gBooks.splice(_getBookById(bookId), 1)
}

function updateBook(bookId, newPrice) {
    gBooks[_getBookById(bookId)].price = newPrice
}

function _getBookById(bookId) {
    return gBooks.findIndex(book => book.id === bookId)
}

function addBook(title, price) {
    gBooks.unshift(_createBookObj(title, price))
}


// function _bookActionWraper(func) {
//     function inner(bookID, ...args) {
//         var index = gBooks.findIndex(book => book.id === bookID)
//         if (index === -1) return
//         return func(index, ...args)
//     }
//     return inner
// }

// // function removeBook
// const removeBook = _bookActionWraper(index => gBooks.splice(index, 1))

// // function updateBook
// const updateBook = _bookActionWraper((index, newPrice) => gBooks[index].price = newPrice)