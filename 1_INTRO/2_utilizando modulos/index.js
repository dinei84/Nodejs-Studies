const  fs = require('fs'); // file sistem

fs.readFile('arquivo1.txt','utf8', (err, data) =>{

    if (err) {
        console.log('Deu um erro: ',err)
        return
    }

    console.log(data)

})