const express = require('express')
const port = 3000
const path = require('path')
const basePath = path.join(__dirname, 'templates')
const app = express()

const checkAuth = function(req, res, next){

    req.authStatus = true

    if (!req.authStatus) {
        console.log('Não esta logado, faça o login')
        next()
    }else{
        console.log('Esta logado, pode continuar')
        next()
    }    
}

app.use(checkAuth)


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})