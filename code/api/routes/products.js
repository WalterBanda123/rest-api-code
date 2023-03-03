const express = require('express')

const routes = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product')


routes.get('/', (req, res, next) => {
     Product.find().then(
        docs => {
            console.log(docs);
            res.status(200).json(docs)
        }
    ).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})
routes.post('/', (req, res, next) => {


    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
    });


    product.save().then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Handling POST request form /products',
            createdProduct: result
        })
    }).catch(err => {
        err => console.log(err);
        res.status(500).json({
            error: err
        })
    });


})
routes.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product'
    })
})
routes.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    })
})
routes.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id).then(doc => {

        console.log(doc);
        res.status(200).json(doc)
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            err: err
        })
    })

})

module.exports = routes;