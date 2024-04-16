const express = require('express');
const router = express.Router();

router.get('/book/list', (req, res) => {
    const books = [
        { id: 1, title: 'Book 1' },
        { id: 2, title: 'Book 2' },
        { id: 3, title: 'Book 3' },
    ];
    res.render('books', { books });
});

module.exports = router;