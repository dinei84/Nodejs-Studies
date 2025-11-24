const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn.js");

//Instanciando meus models
const User = require("./model/User.js");
const Transaction = require("./model/Transaction.js")

const app = express();

//Rodando a engine do handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//Midleware do css
app.use(express.static("public"));

//Renderizando url
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Criando a rotas
app.get('/users/create', (req, res) => {
  res.render('adduser')
})

app.get('/transaction/create', (req, res) => {
  res.render('addtransaction')
})

app.post('/users/create', async (req, res) =>{
  
  const name = req.body.name
  const occupation = req.body.occupation
  const newslatter = req.body.newslatter 

  if (newslatter === 'on') {
    newslatter = true
  }

  console.log(req.body)

  await User.create({name, occupation, newslatter})

  res.redirect('/')
})

app.post('/transaction/create', async (req, res) => {

  const bank = req.body.bank
  const value = req.body.value
  const category = req.body.category
  const type = req.body.type
  const description = req.body.description
  const date = req.body.date

  console.log(req.body)

  await Transaction.create({bank, value, category, type, description, date})

  res.redirect('/')
})



app.get("/", async(req, res) => {

  const users = await User.findAll({raw: true})
  const transaction = await Transaction.findAll({raw: true})

  console.log(users, transaction)

  res.render("home", {users: users, transaction: transaction});
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => console.log(error));
