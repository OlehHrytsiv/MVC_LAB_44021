const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/book/add', (req, res) => {
    res.render('add-book');
});

module.exports = router;