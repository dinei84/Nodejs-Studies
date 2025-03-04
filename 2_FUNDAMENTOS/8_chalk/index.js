import chalk from "chalk";

const nota = 6

if (nota >= 7) {
    console.log(chalk.green(`Sua nota foi ${nota} e você foi aprovado`))
}else{
    console.log(chalk.red(`Sua nota foi ${nota}, e voce esta Reprovado`))
}