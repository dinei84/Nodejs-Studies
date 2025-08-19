const express = require ('express')
const path = require ('path')
const app = express()
const port = 3000
const router = express.Router()

const basePath = path.join(__dirname,'views')
const homePath = path.join(__dirname,'..', 'home')

router.get('/home', (req, ress)=>{
    ress.sendFile(path.join(views, 'home.handlebars'))
})
