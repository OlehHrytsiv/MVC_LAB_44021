const express = require('express');
const router = express.Router();
const Book = require('../models/book');

let books = [];

router.get('/book/list', (req, res) => {
    res.render('books', { books });
});

router.post('/book/add', (req, res) => {
    const { title, publishingYear, authorId } = req.body;
    const newBook = new Book(books.length + 1, title, publishingYear, authorId);
    books.push(newBook);
    res.redirect('/book/list');
});

router.delete('/book/delete/:id', (req, res) => {
    const bookId = req.params.id;
    books = books.filter(book => book.id != bookId);
    res.redirect('/book/list');
});

router.get('/book/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find(book => book.id === parseInt(bookId));
    if (!book) {
        res.status(404).send("Book not found");
    } else {
        res.render('book', { book });
    }
});

module.exports = router;