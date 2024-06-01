'use strict'

function onInit() {
    render()
}

function render() {
    const elTable = document.querySelector('tbody')

    const strHtmls = getBooks().map(book => `
        <tr id="${book.id}">
            <td class="title">${book.title}</td>
            <td class="price">${book.price}</td>
            <td>
                <button class="read">Read</button>
                <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
                <button class="delete" onclick="onRemoveBook('${book.id}')">Delete</button>
            </td>
        </tr>`
    ).join('')

    elTable.innerHTML = strHtmls
}

function onRemoveBook(bookId) {
    // model
    removeBook(bookId)

    // dom
    var elBook =  _findBookElById(bookId)
    if (elBook) render()
}

function onUpdateBook(bookId) {
    // model
    var newPrice = +prompt('new price?')
    if (!newPrice) return
    updateBook(bookId, newPrice)

    // dom rendering
    var elBookPriceTag = document.querySelector(`#${bookId} .price`)
    elBookPriceTag.innerHTML = newPrice
    //if (elBook) render()
}

function onAddBook() {
    var newBook = prompt('name and price? (seperate by comma)').split(',')
    var bookTitle = newBook[0]
    var bookPrice = +newBook[1]

    addBook(bookTitle, bookPrice)
    render()
}

function _findBookElById(bookId) {
    return document.querySelector(`#${bookId}`)

}