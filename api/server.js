const express = require('express')

const server = express();


server.get('/', (req, res) => {

})

const port = 8008
server.listen(port, () => console.log(`\nAPI listening on port ${port}\n`))

module.exports = server