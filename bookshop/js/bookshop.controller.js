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
                <button class="update">Update</button>
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
    var elBook = document.querySelector(`#${bookId}`)
    if (elBook) render()
}