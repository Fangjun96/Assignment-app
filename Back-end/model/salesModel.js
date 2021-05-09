const mongoose = require('mongoose');

// create Schema & model

const MySchema = new mongoose.Schema({
    options: Array,
    salesTotal: Number,
    payment: Number,
    changeDue: Number,
    created_at: String  //{ type: String, default: Date } 
})

module.exports = mongoose.model('sales', MySchema)