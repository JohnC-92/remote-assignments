const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine','pug');

const mainRoutes = require('./routes/index');

app.use(mainRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found'); // make self defined error 'Not Found'
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err; // set local variable error to send to page
    res.status(err.status); // set page status to error status
    res.render('error');
})

app.listen(3000, () => {
    console.log("The application is running!");
});