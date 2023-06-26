const express = require("express");
const app = express();
const router = express.Router();
const config = require('../knexfile').development;
var knex = require('knex')(config);

app.get('/locations', (req, res) => {
    knex('locations')
    .then(locations => {
        res.json(locations)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router;