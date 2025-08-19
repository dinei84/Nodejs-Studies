const express = require('express')
const exhbs = require('express-handlebars')
const port  = 3000

const app = express()

app.engine('handlebars', exhbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{

    const user = {
        name: "Dinei",
        idade: "41",
        profissao: "Programador"
    }

    const palavra = "Teste de palavra"

    res.render('home', {user: user, palavra})

})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
})