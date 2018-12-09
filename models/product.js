const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    price: Number,
    discount: Number,
    stock: Number
})

module.exports = mongoose.model('products', productSchema)
