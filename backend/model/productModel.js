import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    unitPrice:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const productModel = mongoose.model('inventories', productSchema)

export default productModel