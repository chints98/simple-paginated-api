const express = require('express')
    , app = express()
    , cors = require('cors');

app.use(cors());

require('../api')(app);

module.exports = app;
