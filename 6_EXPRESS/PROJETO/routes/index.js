const express = require('express')
const router = express.Router()
const path = require ('path')

const basePath = path.join(__dirname, '..', 'templates')
const baseCalculator = path.join(__dirname, '..','calculator')


router.get('/calculadoraFrete', (req, res) => {
    res.sendFile(path.join(baseCalculator, 'calculadoraFrete', 'calculadoraDeFrete.html'))
})

router.get('/calculadoraComum', (req, res) => {
    res.sendFile(path.join(baseCalculator, 'calculadoraComum', 'calculadoraComum.html'))
})

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

module.exports = router