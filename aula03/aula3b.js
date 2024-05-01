const http = require('http')
const url = require('url')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    res.write(req.url)
    const param = url.parse(req.url,true).query
    res.write('<br/>' + param.nome)
    res.write('<br/>' + param.curso)
    res.end()
})

servidor.listen(porta,host,()=>{
    console.log('Servidor Rodando!')
})
