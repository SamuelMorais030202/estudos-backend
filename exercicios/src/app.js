const express = require('express');
const Book = require('./controllers/book.controller');
const validateId = require('./middlewares/validateId');
const validates = require('./middlewares/validateCampos');

const { validateTitle, validateAuthor, validatePageQuantity } = validates;

const app = express();
app.use(express.json());

app.get('/books', Book.getAll);
app.get('/books/:id', validateId, Book.getById);
app.get('/books/search/:author', Book.getByAuthor);
app.post('/books', validateTitle, validateTitle, validatePageQuantity, Book.createBook);
app.put('/books/:id', validateId, validateTitle, validateAuthor, validatePageQuantity, Book.updateBook);
app.delete('/books/:id', validateId, Book.deletBook);

module.exports = app;