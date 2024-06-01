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
_createBookObjs()

var gBooks

function getBooks(filterBy) {
    return gBooks.filter(book => book.title.toUpperCase().startsWith(filterBy))
}

function findBookObjById(bookId) {
    return gBooks.find(book => book.id === bookId)
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
    gBooks.splice(_getBookIndexById(bookId), 1)
    _saveBooks()
}

function updateBook(bookId, newPrice) {
    gBooks[_getBookIndexById(bookId)].price = newPrice
    _saveBooks()
}

function _getBookIndexById(bookId) {
    return gBooks.findIndex(book => book.id === bookId)
}

function addBook(title, price) {
    gBooks.unshift(_createBookObj(title, price))
    _saveBooks()
}

function _createBookObjs() {
        gBooks = loadFromStorage('books')    
        if(gBooks && gBooks.length !== 0) return

        gBooks = [
            _createBookObj('The Advantures of lori Ipsi', 120),
            _createBookObj('World Atlas', 300),
            _createBookObj('Zorba the Greek', 87)
        ]

        _saveBooks()
}

function _saveBooks() {
    saveToStorage('books', gBooks)
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