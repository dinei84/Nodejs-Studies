const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissao']

console.log(`Meu nome é: ${nome}, e minha profissão é: ${profissao}`)