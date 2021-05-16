import express from 'express'
const router = express.Router()
import {getProductById, saleSubmit} from '../controllers/productController.js'

router.use(express.json())

router.get('/findMatch/:id', getProductById)

router.post('/processSales', saleSubmit)
            
export default router






























/*router.get('/api/findMatch/:id', async (req, res) => {  
    const results = await Inventory_collection.find().toArray() 
    const element = results.find(d => d.id === parseInt(req.params.id)) 
    if (!element) res.status(404).send("The item with the given name was not found")
    res.json(element)  
})*/