const fs = require('fs')
const http = require('http')
const port = 3000;

const server = http.createServer((req, res)=>{  
    const urlInfo = require ('url').parse(req.url, true)
    const name = urlInfo.query.name

    if (!name) {
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        const newNameLine = name + ', \r\n'


        fs.appendFile("arquivo.txt", newNameLine, function(err, data){
            res.writeHead(302, {
                Location: '/',
            })
            return res.end()
        })
    }

    

})

server.listen(port, ()=>{
    console.log(`Servisor rodando na porta ${port}`)
})