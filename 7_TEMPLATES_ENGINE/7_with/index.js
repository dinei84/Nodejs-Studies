const express = require('express')
const exhbs = require('express-handlebars')
const port  = 3000

const app = express()

app.engine('handlebars', exhbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard',(req, res)=>{

    const itens = ["Item a", "Item b","Item c" ]

    res.render('dashboard',{itens})
})

app.get('/blogpost', (req, res)=>{

    const post = {
        title: 'Aprender JavaScript',
        category: 'Aprender Nodejs',
        body: 'Este artigo vai te ajudar a aprender Node js...',
        comments: 4,
    }

    res.render('blogpost', {post})
})

app.get('/', (req, res)=>{

    const user = {
        name: "Dinei",
        idade: "41",
        profissao: "Programador"
    }

    const auth = false
    const palavra = 'teste'
    const approved = true

    res.render('home', {user: user, auth, approved})
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
})