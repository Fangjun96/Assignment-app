const mongoose = require('mongoose');

// create Schema & model
const MySchema = new mongoose.Schema({
    id: Number,
    name: String,
    unitPrice: String,
    quantity: Number
})


module.exports = mongoose.model('inventories', MySchema)

//the model here is refering to the collection name in atlas