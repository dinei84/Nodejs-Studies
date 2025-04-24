const fs = require("fs")

fs.stat('novoarquivo.txt', (err,stats) => {
    if(err){
        console.log(err)
        return
    }

    console.log("É um araquivo? ",stats.isFile());
    console.log("É um diretorio? ",stats.isDirectory());
    console.log("É um link simbolico? ",stats.isSymbolicLink());
    console.log("Dia da criação: ",stats.ctime)
    console.log("Tamanho: ",stats.size, "caracteres")
})