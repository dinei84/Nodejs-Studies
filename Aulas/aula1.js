const http = require('http')

http.createServer((requisicao,resposta)=>{
    resposta.writeHead(200,{
        "content-type":'text/plain'
    })
    resposta.write('Meu primeiro servidor node!!\n Curso de nodejs')
    resposta.end()
}).listen(1337)