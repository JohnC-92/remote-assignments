const express = require('express');
const router = express.Router();

// index route
router.get('/', (req, res) => {
    res.render('index');
});

//Assignment 2,3 Routes
router.get('/getData', (req, res) => {
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

//Assignment 4 Routes
router.get('/myName', (req, res) => {
    const name = req.cookies.name;
    if (name) {
        res.render('myName',{name:name});
    } else {
        res.render('myName');
    }
});

router.get('/trackName', (req, res) => {
    res.cookie('name', req.query.name);
    res.redirect('/myName');
})

module.exports = router;