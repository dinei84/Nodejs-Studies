const path = require("path")

const cunstomPath = '/relatorios/dinei/relatorios.pdf'

console.log("Caminho: ",path.dirname(cunstomPath));
console.log("Nome do arquivo: ",path.basename(cunstomPath));
console.log("Extensão do arquivo: ",path.extname(cunstomPath));