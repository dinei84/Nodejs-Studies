// nome

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]
const peso = args[1].split('=')[1]

console.log(`Meu nome é: ${nome}, e peso: ${peso}Kg`)