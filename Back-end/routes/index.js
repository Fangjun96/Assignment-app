const express = require('express');
const router = express.Router()
const controllers = require('../controllers')

router.use(express.json())

router.get('/findMatch/:id', controllers.product_findById_handler)

router.post('/processSales', controllers.product_sales_handler)
            
module.exports = router






























/*router.get('/api/findMatch/:id', async (req, res) => {  
    const results = await Inventory_collection.find().toArray() 
    const element = results.find(d => d.id === parseInt(req.params.id)) 
    if (!element) res.status(404).send("The item with the given name was not found")
    res.json(element)  
})*/