function rand(min, max) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('BAD VALUE');

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Conexão com o BD...", rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi("Buscando dados da Base...", rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi(1606, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibindo os dados.');
  })
  .catch(e => {
    console.log('Erro:', e);
  });

  console.log('Isso irá aparecer antes do Promise');
