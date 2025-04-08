// This file contains the JavaScript logic for the library application.

document.addEventListener('DOMContentLoaded', () => {
    const bookList = [];

    const addBookButton = document.getElementById('addBookButton');
    const bookInput = document.getElementById('bookInput');
    const bookDisplay = document.getElementById('bookDisplay');

    addBookButton.addEventListener('click', () => {
        const bookName = bookInput.value.trim();
        if (bookName) {
            bookList.push(bookName);
            updateBookDisplay();
            bookInput.value = '';
        }
    });

    function updateBookDisplay() {
        bookDisplay.innerHTML = '';
        bookList.forEach((book, index) => {
            const bookItem = document.createElement('li');
            bookItem.textContent = book;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                bookList.splice(index, 1);
                updateBookDisplay();
            });
            bookItem.appendChild(removeButton);
            bookDisplay.appendChild(bookItem);
        });
    }
});