const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {

    console.log('Se ha recibido una petición a ' + req.url)

    if (req.url === '/') {
        res.write('Estás en el inicio!')
    }

    else if (req.url === '/productos') {
        res.write('Estás en el catálogo')
    }

    else {
        res.statusCode = 404
        res.write('<h1>Not found</h1><p>The requested URL ' + req.url + ' does not exist</p>')
    }
    res.end()
})

server.listen(port, () => console.log(`Escuchando en el puerto ${port}`))