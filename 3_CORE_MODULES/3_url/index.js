// Modulo url
// O modulo url serve para decompor uma url que passamos para o metodo parse
// Podemos resgatar: host, path, search, query e etc
// A partir destas informações podemos alterar a lógica do nossso código

const url = require('url')
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira' // minha url a ser decomposta
const parseUrl = new url.URL(address) // instanciando uma const para receber a url com o endereço

console.log(`Este é meu host: ${parseUrl.host}`)   // esta decompondo a url recebida em varias instancias
console.log(`Este é meu pathname: ${parseUrl.pathname}`)
console.log(`O que esta pesquisando na pagina  ${parseUrl.search}`)
console.log(`Este é são meus parametros de busca:  ${parseUrl.searchParams}`)
console.log(`Este é o que encontrou:  ${parseUrl.searchParams.get('produtos')}`)
