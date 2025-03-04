const readline = require("readline").createInterface({    
    input: process.stdin,
    output: process.stdout

})

readline.question("Qual a sua linguagem de programação preferida?", (language)=>{
    if (language == "Javascript") {
     console.log(`${language} nem é uma linguagem de programação!! kk`)   
    }else{
        console.log(`A minha linguagem de programação preferida é: ${language}`)
    }
    
    readline.close()
})

 