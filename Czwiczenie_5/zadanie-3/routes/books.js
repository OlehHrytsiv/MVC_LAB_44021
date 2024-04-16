const express = require('express');
const router = express.Router();

let books = [];

router.get('/book/list', (req, res) => {
    res.render('books', { books });
});

router.post('/book/add', (req, res) => {
    const { title } = req.body;
    const newBook = { id: books.length + 1, title };
    books.push(newBook);
    res.redirect('/book/list');
});

router.delete('/book/delete/:id', (req, res) => {
    const bookId = req.params.id;
    books = books.filter(book => book.id != bookId);
    res.redirect('/book/list');
});

module.exports = router;