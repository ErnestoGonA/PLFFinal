//IMPORTS
const express = require('express')
const router = express.Router()
const _product = require('../models/product')
const mongoose = require('mongoose')
const _ = require('lodash')

//Get method to get all the products created ever
router.get('/', (req, res) => {
    _product.find()
        .then(products => {
            products ? res.json(products) : res.send("No hay productos")
        })
})

router.post('/init', (req, res) => {
    _.each(_.range(1, 10001, 1), x => {
        _product.create({
            name: 'Product-' + x,
            description: 'Description of the product ' + x,
            price: _.random(1, 1001, true),
            discount: _.random(1, 41),
            stock: _.random(0, 1001)
        })
    })
    res.send('Initialized data')
})

module.exports = router