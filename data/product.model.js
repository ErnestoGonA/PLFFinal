const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    price: Number,
    discount: Number,
    stock: Number
})

const productModel = mongoose.model('products', productSchema,'products')

module.exports = productModel