import productModel from '../model/productModel.js'
import salesModel from '../model/salesModel.js'

const getProductById = (req, res) => {
    const product = productModel.where({id: req.params.id})
    product.findOne(function (err, element){
    if(element){
        res.send(element)
    } else {
        res.status(404).json({message: 'Product not found'})
    }
    })
}

const saleSubmit = (req, res) => {
    const dateTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Singapore"})
    req.body.created_at = dateTime
    salesModel(req.body).save(function (err, result){
     if(err){
        res.status(404).json({message: 'Having errors on submitting'})
     } else{
     res.send(result)
     }
    })
}

export {
    getProductById,
    saleSubmit
}