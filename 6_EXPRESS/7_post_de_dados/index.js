const express = require('express')
const port = 3000
const app = express()

const path = require('path')


//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

const basePath = path.join(__dirname, 'templates')


app.get('/users/add',(req, res) =>{
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O usuario ${name}, tem ${age} anos`)
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //Leitura da tabela users, resgatar um usuario do banco
    console.log(`Estamos buscando pelo usuario ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})