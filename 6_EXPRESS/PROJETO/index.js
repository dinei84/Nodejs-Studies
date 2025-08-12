const express = require('express')
const app = express()
const port = 5000
const path = require ('path')
const basePath = path.join(__dirname, '../templates')


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.js`)
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})