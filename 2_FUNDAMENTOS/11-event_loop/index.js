function a(){
    console.log("Executando a()")
}

function b(){
    a()
    console.log("Executando b()") // A ordem influencia na execução
}

function c (){    
    console.log("Executando c()")
    b()
    a()   
}


//c()
b()
