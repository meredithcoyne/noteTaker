//api routes
const fs = require('fs');

module.exports = function (app) {
    // GET api/notes reads the db.json file and returns saved notes
    app.get("/api/notes", function(req,res){
        console.log("Getting Notes");
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if(err) throw err;
            let notes = JSON.parse(data);
            res.json(notes);
        });
    });

    // POST api/notes recieve a new note to save on the request body, add it to the db.json file to return the new note
    app.post("/api/notes", function(req,res){
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if (err) throw err;

            let notes = JSON.parse(data);
            let newNote = req.body;
            let uniqueId = (notes.length).toString();
            console.log(newNote);
            notes.push(newNote);

            fs.writeFileSync("db/db.json", JSON.stringify(notes), "utf8", (err, data) => {
                if (err) throw err;
                console.log("New note successfully added!");
            });

            res.JSON(notes);
        });
    });

    // DELETE api/notes
    app.delete("/api/notes/:id", function (req,res){
        fs.readFile("db/db.json","utf8", (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            let notesId = req.params.id;
            let newNotesId = 0;
            notes = notes.filter(currNote => {
                return currNote.id != notesId;
            });
            for (currNote of notes) {
                currNote.id = newNotesId.toString();
                newNotesId++;
            }
            fs.writeFileSync("db/db.json", JSON.stringify(notes), "utf8", (err, data) => {
                if (err) throw err;
                console.log("Success!");
            });

            res.json(notes);
        });
    });
}

