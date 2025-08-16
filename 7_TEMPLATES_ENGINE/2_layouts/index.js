const express = require('express')
const exhbs = express.handlebars()
const port  = 3000

const app = express()

app.engine('handlebars', exphbs.engine())
app.set()