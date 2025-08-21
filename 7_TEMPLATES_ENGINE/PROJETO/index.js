const express = require('express')
const exhbs = require('express-handlebars')
const port = 3000
const path = require('path')

const app = express()


app.engine('handlebars', exhbs.engine())
app.set('view engine', 'handlebars')



app.get('/', (req, res)=>{
    res.send('<p>Ola Mundo</p>')
})





app.listen(port, ()=>{
    console.log(`Rodando na porta${port}`)
})



