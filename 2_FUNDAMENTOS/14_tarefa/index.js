import inquirer from 'inquirer';
import chalk from 'chalk';

try {
    inquirer.prompt([
        {
            name: "p1",
            message: "Qual o seu nome: "
        },
        {
            name: "p2",
            message: "Qual a sua idade: "
        }
    ])
    .then((answers) => {
        if (!answers.p1 || !answers.p2) {
            throw new Error("Preencha todos os campos!");
            
        }else{
            console.log(chalk.bgYellow.black(`Nome: ${answers.p1}`));
            console.log(chalk.bgYellow.black(`Idade: ${answers.p2}`));
        }
        
    })
    .catch((err) => console.log(err));
} catch (err) {
    console.log(err);
}
