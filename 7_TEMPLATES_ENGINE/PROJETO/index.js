const express = require('express')
const exhbs = require('express-handlebars')
const port = 5000

const app = express()


app.engine('handlebars', exhbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))



app.get('/', (req, res)=>{
    res.render('home')
})



app.listen(port, ()=>{
    console.log(`Rodando na porta${port}`)
})



