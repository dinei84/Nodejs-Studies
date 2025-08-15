const express = require('express')
const router = express.Router()
const path = require ('path')

const baseCalculator = path.join(__dirname, '..','calculator')


router.get('/calculadoraFrete', (req, res) => {
    res.sendFile(path.join(baseCalculator, 'calculadoraFrete', 'calculadoraDeFrete.html'))
})

router.get('/calculadoraComum', (req, res) => {
    res.sendFile(path.join(baseCalculator, 'calculadoraComum', 'calculadoraComum.html'))
})

module.exports = router