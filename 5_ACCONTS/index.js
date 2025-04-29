// modulos externos
import inquirer from "inquirer";
import chalk from "chalk";

//modulos internos
import fs, { access } from "fs";
import { error } from "console";

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que voce deseja fazer: ",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];
      if (action === "Criar Conta") {
        createAccount();
      }else if (action === 'Depositar') {
        
      }else if (action === 'Consultar Saldo' ) {
        
      }else if (action === 'Depositar') {
        
      }else if (action === 'Sacar') {
        
      }else if (action === 'Sair') {
        console.log(chalk.bgBlue.black('Obrigado por usar o Sistema'))
        process.exit()
      }


    })
    .catch((err) => console.log(err));
}

// Crate Account
function createAccount() {
  console.log(chalk.bgGreen.black("Parabens por escolher o nosso banco!"));
  console.log(chalk.green("Defina as opções de sua conta a seguir"));
  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accounName",
        message: "Digite um nome para sua conta: ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accounName"];
      console.info(accountName);

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("Esta conta ja existe, escolha outro nome!")
        );        
        buildAccount();
        return;
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
          console.log(err);
        },
      );

      console.log(chalk.green('Parabens, a sua conta foi criada!'))
      operation()

    })
    .catch((err) => console.log(err));
}
