import mongoose from 'mongoose'

const saleSchema = new mongoose.Schema({
    options: {
        type: Array,
        required: true
    },
    salesTotal: {
        type: Number,
        required: true
    },
    payment: {
        type: Number,
        required: true
    },
    changeDue: {
        type: Number,
        required: true
    },
    created_at: {
        type: String,
        required: true
    }
})

const salesModel = mongoose.model('sales', saleSchema)

export default salesModel