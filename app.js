const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config({ path: '.env' });
const app = express();
require('./models/headers')
require('./models/rolesOpening')
require('./models/profile')
require('./models/stats')
const indexRouter = require('./router/index');

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected')
});

app.set('port', process.env.PORT);
app.listen(app.get('port'), function () {
    console.log('App listening on port', app.get('port'));
});

app.use(morgan('short'));

app.use((req, res, next) => {
    if (req && req.method === 'OPTIONS') {
        res.json();
    } else {
        next();
    }
});

app.use('/', indexRouter);