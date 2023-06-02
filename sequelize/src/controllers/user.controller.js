const UserService = require('../services/user.service');

/**
 * 
 * @param {Request} _req 
 * @param {Response} res
 */
const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};