'use strict';
const express = require('express');
const path = require('path');

let app = module.exports = express();
app.use(express.static(path.join(__dirname, 'public')));
app.server = app.listen(7030, () => console.log('Viper.js server listening on 7030...'));
