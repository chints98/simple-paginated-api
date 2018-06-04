const express = require('express')
    , app = express()
    , cors = require('cors')
    , bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

require('../api')(app);

module.exports = app;
