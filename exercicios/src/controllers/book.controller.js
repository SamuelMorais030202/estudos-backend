const bookServices = require('../services/book.service');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const getAll = async (req, res) => {
  try {
    const users = await bookServices.getAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookServices.getById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const newBook = await bookServices.createBook(title, author, pageQuantity);
    return res.status(201).json(newBook);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const newBook = await bookServices.updateBook(id, title, author, pageQuantity);
    if (!newBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book update' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const deletBook = async (req, res) => {
  try {
    const { id } = req.params;
    await bookServices.removeBook(id);

    return res.status(200).json({ message: 'Book delet' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deletBook,
}