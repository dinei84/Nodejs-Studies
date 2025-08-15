const express = require('express')
const app = express()
const port = 5000
const path = require ('path')
const basePath = path.join(__dirname, 'templates')
const routes = require('./routes/index.js')


// Arquivos estaticos
app.use(express.static('public'))


app.use('/calculator', routes)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})