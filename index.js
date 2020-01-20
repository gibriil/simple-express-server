const express = require('express');
const router = require('./router.js');

const PORT = 5000;

const app = express();

app.use('/', router);

app.listen(PORT);