// require express, ./routes/htmlRoutes, ./routes/apiRoutes
const express = require(`express`);
const api = require(`./routes/apiRoutes`);
const htmlRoutes = require(`./routes/htmlRoutes`);

// initializing the app and creating a route
const PORT = process.env.PORT || 3001;
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(`/api`, apiRoutes);
app._router.use(`/`, htmlRoutes);


// start server
app.listen(PORT, () =>
    console.log(`listening on port ${PORT}`)    
);