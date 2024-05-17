const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const request = require('request');
const cors = require('cors');

const apiKey = '075c5aca09590a9df2dd5f33df74b29b'; // Substitua por sua chave da API

app.use(bodyParser.json());
app.use(cors());

app.get('/tempo/:cidade', (req, res) => {
  const cidade = req.params.cidade;
  const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt&units=metric`;

  request(urlAPI, (error, response, body) => {
    if (error) {
      console.error(error);
      res.sendStatus(500).send('Erro ao buscar previsão do tempo.');
      return;
    }

    const dadosClima = JSON.parse(body);

    if (dadosClima.cod !== 200) {
      res.status(dadosClima.cod).send(dadosClima.message);
      return;
    }

    const resultado = {
      cidade: dadosClima.name,
      temperatura: dadosClima.main.temp.toFixed(2) + '°C',
      descricao: dadosClima.weather[0].description,
      icone: `http://openweathermap.org/img/wn/${dadosClima.weather[0].icon}.png`
    };

    res.json(resultado);
  });
});

const server = http.createServer(app);
server.listen(3000, () => console.log('Servidor ouvindo na porta 3000'));
