const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const request = require('request');

const apiKey = '2ea0857cebe675c2d3e0d0deb4935edb'; // Substitua por sua chave da API

app.use(bodyParser.json());

app.get('/tempo/:cidade', (req, res) => {
  const cidade = req.params.cidade;

  const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`;

  request(urlAPI, (error, response, body) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar previsão do tempo.');
      return;
    }

    const dadosClima = JSON.parse(body);

    const temperatura = dadosClima.main.temp - 273.15; // Convertendo de Kelvin para Celsius
    const descricao = dadosClima.weather[0].description;
    const icone = dadosClima.weather[0].icon;

    const resultado = {
      cidade: cidade,
      temperatura: temperatura.toFixed(2) + '°C',
      descricao: descricao,
      icone: icone
    };

    res.json(resultado);
  });
});

const server = http.createServer(app);
server.listen(3000, () => console.log('Servidor ouvindo na porta 3000'));
