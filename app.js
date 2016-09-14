'use strict';
const express = require('express');
const path = require('path');

const app = module.exports = express();
app.use(express.static(path.join(__dirname, 'public')));
app.server = app.listen(7030, () => console.log('ViperJS server listening on 7030...'));
