// Para retornar HTML precisamos implementar mais recursos
// Podemos adicionar um status code no retorno, com a propriedade statusCode
// Mudar os headers para text/html
// E retornar o HTML pelo metodo end do http

const http = require ( 'http'); //requisitando o modulo

const port = 3000; // instanciando a porta

const server = http.createServer((req, res) =>{ // criando servidor, o req é uma requisição e p res a resposta
    res.statusCode = 200; // Adicionando um statusCode para debugar, (200 = Acesso bem sucessido)
    res.setHeader('Contenty-Type', 'text/html') // Alterando o tipo de conteudo do header e setando o conteudo como text/html (a partir desse momento nosso programa esta apto pra receber html)
    res.end('<h1>Este é meu servidor massa!!</h1><p>testando atualização</p>'); //

})

server.listen(port, ()=>{ // escutando a porta, servidor esta escutando na porta, uma função de callback para retornar alguma coisa
    console.log("Servidor rodando normalmente"); // retornando uma mensagem no console
})