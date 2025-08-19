const express = require('express')
const exhbs = require('express-handlebars')
const port  = 3000

const app = express()

app.engine('handlebars', exhbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard',(req, res)=>{
    res.render('dashboard')
})

app.get('/', (req, res)=>{

    const user = {
        name: "Dinei",
        idade: "41",
        profissao: "Programador"
    }

            const palavra = 'teste'

    const auth = true

    res.render('home', {user: user, auth})
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
})