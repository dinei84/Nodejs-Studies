const express = require('express')
const exhbs = require('express-handlebars')
const port  = 3000
const routes = require('./routes/routes.js')

const app = express()

app.engine('handlebars', exhbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{
    res.render('home')
})
app.get('/clientes', (req, res) =>{
    res.render('clientes')
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
})