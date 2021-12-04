const path = require('path');
const router = require('express').Router();

// GET /notes returns notes.html file
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});



// GET * returns index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;