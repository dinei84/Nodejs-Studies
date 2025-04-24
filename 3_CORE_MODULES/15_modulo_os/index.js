const os = require("os")

console.log("Quantos CPU´s tem no servidor: ",os.cpus())
console.log("Quantos tem de memoria livre: ", os.freemem(), " em bites")
console.log("Qual o diretorio principal da maquina: ", os.homedir())
console.log("Qual o Sistem Operacional esta rodando na maquina: ", os.type())

