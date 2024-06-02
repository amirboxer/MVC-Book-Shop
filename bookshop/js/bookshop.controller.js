'use strict'
var gFilterBy = ''

function onInit() {
    render()
}

function render() {
    const elTable = document.querySelector('tbody')

    const strHtmls = getBooks(gFilterBy).map((book, index) => `
        <tr id="${book.id}">
            <td>${index + 1}</td>
            <td class="title">${book.title}</td>
            <td class="price">${book.price}</td>
            <td>
                <button class="read" onclick=onShowDetails('${book.id}')>Details</button>
                <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
                <button class="delete" onclick="onRemoveBook('${book.id}')">Delete</button>
            </td>
        </tr>`
    ).join('')

    elTable.innerHTML = strHtmls
}

function onFilterBy(elInput) {
    gFilterBy = elInput.value.toUpperCase()
    render()
}

function onClearSearch() {
    var elSearchInput = document.querySelector('.search-input')
    elSearchInput.value = ''
    gFilterBy = ''
    render()
}

function onRemoveBook(bookId) {
    // model
    removeBook(bookId)

    // dom
    var elBook =  _findBookElById(bookId)
    if (elBook) render()
    handleDeleteBookModal()
}

function onUpdateBook(bookId) {
    var newPrice = +prompt('new price?')
    if (!newPrice) return
    
    // model
    updateBook(bookId, newPrice)

    // dom rendering
    var elBookPriceTag = document.querySelector(`#${bookId} .price`)
    elBookPriceTag.innerHTML = newPrice
    //if (elBook) render()
}

function onAddBook() {
    var newBook = prompt('name and price? (seperate by comma)').split(',')
    var bookTitle = newBook[0].trim()
    var bookPrice = +newBook[1]

    // Prevent adding a book with a blank title or price
    if (!bookPrice || !bookTitle) return

    addBook(bookTitle, bookPrice)
    render() //TODO
}

function onShowDetails(bookId) {
    // model
    var bookObject = findBookObjById(bookId)
    
    // dom
    var elBook =  _findBookElById(bookId)
    var elDialog = document.querySelector('.details-modal')
    var elModalText = elDialog.querySelector('pre')
    elModalText.innerHTML = JSON.stringify(bookObject, null, 1)
    elDialog. showModal()
}

function handleDeleteBookModal() {
    var elDeleteBookModal = document.querySelector('.book-deleted-modal')
    elDeleteBookModal.show()
    setTimeout(() => elDeleteBookModal.close(), 2000)
}

function _findBookElById(bookId) {
    return document.querySelector(`#${bookId}`)
}