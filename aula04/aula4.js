const http = require('http')
const porta = process.env.PORT

const servidor = http.createServer((req,res)=>{
    res.statusCode = 200
    res.writeHead(200,{'Content-type':'text-plain'})
    res.end('CFB Curso')
})

servidor.listen(porta || 3000,()=>{console.log('Servidor Rodando!')})