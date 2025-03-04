const fs = require('fs')

console.log("Inicio")

fs.writeFileSync('arquivo.txt', 'Olá Mundo')
fs.readFileSync('arquivo.txt', 'utf-8')


console.log('Fim')