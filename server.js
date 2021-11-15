// require express, path, ./routes/apiRoutes
const express = require(`express`);
const path = require(`path`);
const api = require(`./routes/apiRoutes`);
const PORT = process.env.PORT || 3001;
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//starts listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});