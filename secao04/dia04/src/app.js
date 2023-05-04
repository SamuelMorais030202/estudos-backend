// src/app.js
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

require('express-async-errors');

const apiCredenciais = require('./middlewares/apiCredenciais');
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(apiCredenciais);

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());

const validateTeam = (req, res, next) => {
  const { nome, sigla } = req.body;

  if (!nome) return res.status(400).json({ message: "O campo nome é obrigatório" });
  if (!sigla) return res.status(400).json({ message: "O campo sigla é obrigatório" });
  next();
};

const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((t) => t.id === id)) {
    return next();
  }

  return res.status(404).json({ message: "Time não encontrado" });
}

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    // Confere se a sigla proposta está presente nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // Confere se já existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(402).json({ message: 'Já existe um time com essa sigla' })
  }
  // O id recebe o nextid(o próximo id)
  // A constante team ira receber uma chave id, e as informações vindas do body
  const team = { id: nextId, ...req.body };
  // Iniserindo o novo time no array de times
  teams.push(team);
  // Atualizando o next id para que o próximo time receba o id correto
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;