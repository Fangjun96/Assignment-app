let productModel = require('../model/productModel')
let salesModel = require('../model/salesModel')

const product_findById_handler = (req, res) => {
    const query = productModel.where({id: req.params.id})
    query.findOne(function (err, element){
    if(element){res.send(element)}
    })
}

const product_sales_handler = (req, res) => {
    const dateTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Singapore"})
    req.body.created_at = dateTime
    salesModel(req.body).save(function (err, result){
     res.send(result)
    })
}

module.exports = {
    product_findById_handler,
    product_sales_handler
}