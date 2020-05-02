const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static('public'));
app.set('view engine','pug');

app.get('/', (req, res) => {
    res.send('Hello, My Server!');
});

app.get('/getData', (req, res) => {
    if (!req.query.number) {
        res.send('Lack of Parameter');
    } else {
        const num = parseInt(req.query.number);
        if (!Number.isInteger(num)) {
            res.send('Wrong Parameter');
        } else if (Number.isInteger(num)){
            if (num>0){
                res.send(String(num*(num+1)/2));
            } else {
                res.send('Wrong Parameter');
            }
        };    
    }
    
});

app.get('/myName', (req, res) => {
    const name = req.cookies.name;
    if (name) {
        res.render('myName',{name:name});
    } else {
        res.render('myName');
    }
});

app.get('/trackName', (req, res) => {
    // console.log(req.query.name);
    res.cookie('name', req.query.name);
    res.redirect('/myName');
})

app.listen(3000, () => {
    console.log("The application is running!");
});