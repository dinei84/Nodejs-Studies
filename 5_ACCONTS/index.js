// modulos externos
import inquirer from "inquirer";
import chalk from "chalk";

//modulos internos
import fs, { access } from "fs";

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
      } else if (action === "Depositar") {
        deposit();
      } else if (action === "Consultar Saldo") {
        getAccountBalance()
      } else if (action === "Sacar") {
        widthraw()
      } else if (action === "Sair") {
        console.log(chalk.bgBlue.black("Obrigado por usar o Sistema"));
        process.exit();
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
        }
      );

      console.log(chalk.green("Parabens, a sua conta foi criada!"));
      operation();
    })
    .catch((err) => console.log(err));
}

// add an amount to user account
function deposit() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual o nome da sua conta?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      //verify if account exists
      if (!checkAccount(accountName)) {
        return deposit();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Qual o valor a ser depositado",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];
          // add amount
          addAmount(accountName, amount);
          operation();
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(
      chalk.bgRed.black("Esta conta não existe, escolha outro nome!")
    );
    return false;
  }

  return true;
}

function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);
  if (!amount) {
    console.log(
      chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde")
    );
    return deposit();
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);
  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
    }
  );

  console.log(
    chalk.green(
      `Foi depositado o valor de R$${amount} na conta de: ${accountName}`
    )
  );
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf-8",
    flag: "r",
  });
  return JSON.parse(accountJSON);
}

// show account balance
function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual o nome da sua conta?",
      },
    ])
    .then((answer) => {
      const accountName = answer['accountName'];

      // verify if account axists
      if (!checkAccount(accountName)) {
        return getAccountBalance();
      }

      const accountData = getAccount(accountName)

      console.log(chalk.bgBlue.black(
        `Olá, o saldo da sua conta é de R$${accountData.balance}`,
      ),
    )
    operation()
    })
    .catch((err) => console.log(err));
}

// widthraw an amount from user account
function widthraw(){
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o nome da sua conta:'
    },
  ]).then((answer)=> {

    const accountName = answer['accountName']

    if (!checkAccount(accountName)) {
      return widthraw()
    }

    inquirer.prompt([
      {
        name: 'amount',
        message: 'Quantos reais quer sacar? '
      }
    ]).then((answer) => {

      const amount = answer['amount']

      removeAmount(accountName,amount)

    }).catch((err) => console.log(err))

  })
  .catch((err) => console.log(err))
}


function removeAmount(accountName, amount){
  const accountData = getAccount(accountName)

  if (!amount) {
    console.log(    
      chalk.bgRed.black(`Ocorreu um erro, tente novamente mais tarde`),
    )
    return widthraw()
  }

  if (accountData.balance < amount) {
    console.log(
      chalk.bgRed.black('Valor indisponivel')
    )
    return widthraw()
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function(err){
      console.log(err)
    },
  )

  console.log(
    chalk.green(`Foi realizado um saque de ${amount}, na conta de ${accountName}`)
  )
  operation()

}