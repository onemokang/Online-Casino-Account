const express = require('express');
const req = require('express/lib/request');
const app = express();
const config = require('./knexfile').development;
const knex = require('knex')(config);
const port = 3000;
const cors = require('cors');

// controller
const usersController = require('./controllers/users_controller');
app.use('/user', usersController);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: '*'}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

app.get('/', () => {
    console.log(`Welcome to Casino de Monte Fortuna!`)
}); 

module.exports = app;