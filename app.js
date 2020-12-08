var createError = require('http-errors');
const axios = require('axios');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
const cors = require('cors');
const Helper = require('./my_llibs/helper');

var app = express();

// database
mongoose.connect('mongodb+srv://webfullstack99:Loveguitar99@cluster0.mrjwz.gcp.mongodb.net/todolist?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/api', require('./routes/api/navigator'));
app.use('*', (req, res, next) => {
    Helper.showNotFoundResponse(res);
})


/*
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
*/

// prevent idling
function startKeepAlive() {
    setInterval(() => {
        let date = new Date();
        let hours = date.getUTCHours();
        if (hours < 16 && hours > 0) {
            axios.get('https://ap-webserver.herokuapp.com')
                .then(response => {
                    console.log('res', response.data.data);
                })
                .catch(error => {
                    console.log('err', error.response.data);
                });
        }
    }, 20 * 60 * 1000);
}
startKeepAlive();
module.exports = app;
