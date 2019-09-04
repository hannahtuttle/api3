const express = require('express')

const productsRouter = require('../products/productsRouter.js')

const suppliersRouter = require('../suppliers/suppliersRouter.js')

const server = express();

// global middleware goes here
server.use(express.json())

server.use('/products', productsRouter)

server.use('/suppliers', suppliersRouter)


server.get('/', (req, res) => {
 res.status(200).json({message: "get succesfull"})
})



module.exports = server