document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');
    let books = [];

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get the book name and author name from the form
        const bookName = document.getElementById('bookName').value;
        const authorName = document.getElementById('authorName').value;

        // Add the new book to the array
        books.push({ bookName, authorName });

        // Update the displayed book list
        displayBooks();

        // Clear the form
        bookForm.reset();
    });

    function displayBooks() {
        // Clear the current list
        bookList.innerHTML = '';

        // Append each book to the list
        books.forEach((book, index) => {
            const li = document.createElement('li');
            li.textContent = `${book.bookName} by ${book.authorName}`;
            bookList.appendChild(li);
        });
    }
});
