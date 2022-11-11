var express = require('express');
var router = express.Router();
const Manages = require('../models/manages');


router.get('/', function(req, res, next) {
    Manages.getAllProducts(function(err,manages){
        if(err) throw err
        res.render('manages',{data:"Hello Mongoose", manages:manages});
    })
});

router.get('/addProduct', function(req, res, next) {
    res.render('addProduct');
});

router.post('/addProduct', function(req, res, next) {
        let data = new Manages({
            name:req.body.name,
            price:parseFloat(req.body.price),
            number:parseInt(req.body.number),
            dangerNumber:parseInt(req.body.dangerNumber),
            safeNumber:parseInt(req.body.safeNumber)
        })
        Manages.createProduct(data, function(err){
            if(err) console.log(err)
            res.redirect("/manages")
        });
    }
);

module.exports = router;

