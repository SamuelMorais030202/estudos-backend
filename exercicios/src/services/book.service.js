const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['author', 'ASC']]
  });
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const createBook = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

const updateBook = async (id, title, author, pageQuantity) => {
  const book = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  return book;
};

const removeBook = async (id) => {
  const user = await Book.destroy(
    { where: { id } },
  );

  return user;
};

const getByAuthor = async (author) => {
  const authors = await Book.findAll(
    { where: { author } }
  );

  return authors;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
  getByAuthor,
}