const express = require('express');
const router = express.Router();

router.get('/author/list', (req, res) => {
    const authors = [
        { id: 1, name: 'Author 1' },
        { id: 2, name: 'Author 2' },
        { id: 3, name: 'Author 3' },
    ];
    res.render('authors', { authors });
});

module.exports = router;