// Required files and modules
const router = require('express').Router();
const store = require('../db/store');


//GET "api/notes" reads db.json 


//POST /api/notes receives new notes and adds to db.json





//DELETE request /api/notes/:id
router.delete('/notes/:id', (req, res) => {
    console.log(req.params.id);
    deleteNote(req.params.id, './db/db.json');
    res.json('success');
});

// Export
module.exports = router;