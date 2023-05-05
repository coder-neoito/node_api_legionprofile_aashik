const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gamelegion', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected')
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
const indexRouter = require('./router/index');
app.use('/', indexRouter);