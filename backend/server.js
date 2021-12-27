import express from 'express'
import colors from 'colors'
import products from './data/products.js'
import connectDB from './config/db.js'
const app = express();
import dotenv from 'dotenv'
dotenv.config();

connectDB();

app.get('/', (req, res) => {
    res.send('Api is running...')
})

app.get('/api/products', (req, res) => {
    res.send(products)
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.send(product)
})
const port = process.env.PORT

app.listen(port, console.log(`Server is running on port ${port} in ${process.env.NODE_ENV}`.yellow.underline))