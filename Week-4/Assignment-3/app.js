const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// create connection
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'assignment'
});

// connect db
db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('MySQL Connected...')
})

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','pug');

// index route
app.get('/', (req, res) => {
    res.render('index');
});

// welcome route
app.get('/welcome', (req, res) => {
    res.render('welcome');
});

// signup route
app.get('/signup', (req, res) => {
    
    let user = {email:req.query.email, password:req.query.password}   
    let sqlCheck = `SELECT * FROM user WHERE email = '${req.query.email}'`;
    let queryCheck = db.query(sqlCheck, (err, results) => {
        if (err) {
            throw err;
        } else {
            if (results.length === 0) {
                let sql = 'INSERT INTO user SET ?';
                db.query(sql, user, (err, result) => {
                    if (err){
                        throw err;
                    } else {
                        res.redirect('welcome');
                    }
                });
            } else {
                let msg = 'User already exist!';
                res.render('index',{msg:msg});
            }
        }
    });   

});

// signin route
app.get('/signin', (req, res) => {
    
    let sqlCheck = `SELECT * FROM user WHERE email = '${req.query.email}' AND password = '${req.query.password}'`
    let queryCheck = db.query(sqlCheck, (err, results) => {
        if (err) {
            throw err;
        } else {
            if (results.length !== 0) {
                res.redirect('welcome');                   
            } else {
                let msg = 'Invalid username or password!';
                // res.redirect('/?msg=' + msg);
                res.render('index',{msg:msg});
            }
        }
    });

});

app.listen(3000, () => {
    console.log("The application is running!");
});