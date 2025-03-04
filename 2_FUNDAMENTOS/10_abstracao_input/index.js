const inquirer = require("inquirer");

inquirer.default
  .prompt([
    {
      name: "pergunta1",
      message: "A primeira nota: ",
    },
    {
      name: "pergunta2",
      message: "A segunda nota: ",
    },
    {
      name: "pergunta3",
      message: "A terceira nota: ",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const media =
      ((parseInt(answers.pergunta1) +
        parseInt(answers.pergunta2) +
        parseInt(answers.pergunta3)) /
      3).toFixed(2);
    if (media >= 7) {
      console.log(`A média é: ${media}, Aprovado!`); 
    } else {
      console.log(`A média é: ${media}, Reprovado!`);
    }
  })
  .catch((err) => console.log(err));
