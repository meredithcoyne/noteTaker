const path = require('path');

// routing
module.exports = function(app){
    // GET to return notes.html
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/notes.html"));
    });

    // GET return index.html file
    app.get("*", function(req, res){
        res.sendFile(path.join(_dirname, "../public/index.html"));
    });

}