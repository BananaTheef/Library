const addButton = document.querySelector('.add-book-btn');
addButton.addEventListener('click', addBookToLibrary);

let myLibrary = [];

class Book {
    constructor(title, author, length, status) {
        this.title = title;
        this.author = author;
        this.length = length + 'p';
        this.status = status;
    }
}

function addBookToLibrary() {
    let title = prompt("Please enter the book title: ");
    let author = prompt("Please enter the book author: ");
    let length = prompt("Please enter the book length: ");
    let status = prompt("Please enter your reading status: ");
    let book = new Book(title, author, length, status);
    
    myLibrary.push(book);
    return render(myLibrary);
}

function deleteBook()
{
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function render(myLibrary) {
    let n = myLibrary.length;
    const display = document.querySelector('.display');

    for (let i=0; i<n; i++) {
        const book = document.createElement('tr');
        for (let [key, value] of Object.entries(myLibrary[i])) {
            const bookInfo = document.createElement('td');
            bookInfo.classList.add('bookInfo')
            bookInfo.textContent = myLibrary[i][key];
            book.appendChild(bookInfo);
        }
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Remove Book";
        deleteBtn.classList.add('remove-btn');
        deleteBtn.addEventListener('click', deleteBook);
        book.appendChild(deleteBtn);
        display.appendChild(book);
    }
}