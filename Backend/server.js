const http = require('http')
const app = require('./app')
const { initializeSocket } = require('./soket');
const port = process.env.PORT || 3000

const server = http.createServer(app)

initializeSocket(server)

server.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
})