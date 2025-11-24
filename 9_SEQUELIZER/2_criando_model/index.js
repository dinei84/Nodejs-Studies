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

app.get("/", (req, res) => {
  res.render("home");
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => console.log(error));
