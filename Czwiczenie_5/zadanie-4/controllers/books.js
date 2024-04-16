exports.getBooksList = (req, res) => {
    res.render('books', { books });
};

exports.addBook = (req, res) => {
    const { title, publishingYear, authorId } = req.body;
    const newBook = new Book(books.length + 1, title, publishingYear, authorId);
    books.push(newBook);
    res.redirect('/book/list');
};

exports.deleteBook = (req, res) => {
    const bookId = req.params.id;
    books = books.filter(book => book.id != bookId);
    res.redirect('/book/list');
};