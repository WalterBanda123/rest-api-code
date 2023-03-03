const express = require('express')
const routes = express.Router();

routes.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched.'
    })
})
routes.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Orders were created!.',
        orderCreated: order
    })
})
routes.get('/:orderId', (req, res, next) => {

    res.status(201).json({
        message: 'Order was fetched',
        orderId: req.params.orderId,

    })
})
routes.delete('/', (req, res, next) => {

    res.status(201).json({
        message: 'Deleted orders',


    })
})
routes.patch('/:orderId', (req, res, next) => {

    res.status(201).json({

        message: 'Updated order',
    })
})

module.exports = routes