const express = require("express");
const app = express();
const router = express.Router();
const config = require('../knexfile').development;
var knex = require('knex')(config);

app.get('/user', (req, res) => {
    knex('users')
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router;