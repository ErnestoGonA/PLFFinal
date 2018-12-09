const mongoose = require('mongoose')
const _ = require('underscore')

module.exports = (wagner) => {

    mongoose.Promise = global.Promise

    mongoose.connect('mongodb://localhost:27017/plf')

    const Products = require('./product.model')

    const models = {
        Products: Products
    }

    _.each(models, (value, key) => {
        wagner.factory(key, () => value)
    })
}
