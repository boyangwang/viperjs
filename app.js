'use strict';
const express = require('express');
let app = express();
app.use(express.static('public'));
app.listen(7030, () => console.log('Viper.js server listening on 7030...'));
