const fs = require('fs')

console.log("Inicio")

fs.writeFile('arquivo2.txt', "ola mundo 2", function(err){
    setTimeout(function(){
        console.log("Arquivo criado")
    },1000)
})


console.log("Fim")