const server = require('./api/server.js')

const port = 8008
server.listen(port, () => console.log(`\nAPI listening on port ${port}\n`))