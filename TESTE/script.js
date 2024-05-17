document.getElementById('buscar').addEventListener('click', () => {
  const cidade = document.getElementById('cidade').value;

  fetch(`http://localhost:3000/tempo/${cidade}`)
    .then(response => response.json())
    .then(data => {
      document.querySelector('#resultado h2').textContent = `Clima em ${data.cidade}`;
      document.querySelector('#resultado p').textContent = `Temperatura: ${data.temperatura}, Descrição: ${data.descricao}`;
      document.querySelector('#resultado img').src = data.icone;
    })
    .catch(error => {
      console.error('Erro ao buscar previsão do tempo:', error);
      alert('Erro ao buscar previsão do tempo. Cidade ainda não encontrada no bandco de dados!!');
    });
});
