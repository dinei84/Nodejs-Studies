const express = require('express')
const port = 3000
const app = express()
const users = require('./users')
const path = require('path')
const basePath = path.join(__dirname, 'templates')



//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

// Arquivos estaticos
app.use(express.static('public'))

app.use('/users', users)



app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})