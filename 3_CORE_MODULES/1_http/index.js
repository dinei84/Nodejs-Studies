const http = require ( 'http'); //requisitando o modulo

const port = 3000; // instanciando a porta

const server = http.createServer((req, res) =>{ // criando servidor, o req é uma requisição e p res a resposta
    res.write('Modificando a resposta'); // o servidor enviando uma resposta 
    res.end(); // fim da resposta
})

server.listen(port, ()=>{ // escutando a porta, servidor esta escutando na porta, uma função de callback para retornar alguma coisa
    console.log("Servidor rodando normalmente"); // retornando uma mensagem no console
})