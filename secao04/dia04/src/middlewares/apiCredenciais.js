const fs = require('fs/promises');

module.exports = async function apiCredenciais (req, res, next) {
  const token = req.header('X-API-TOKEN'); // captura o token do cabeçalho

  // Lê o conteúdo de ./autodata.json
  const authData = await fs.readFile('../../autodata.json', { encoding: 'utf-8' });

  // redFile nos deu uma string, agora vamos carregar o objeto a partir dela 
  const autorized = JSON.parse(authData);

  if (token in autorized) {
    next(); // pode continuar 
  } else {
    res.sendStatus(401); // não autorizado
  }
}