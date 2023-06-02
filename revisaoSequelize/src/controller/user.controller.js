const userService = require('../services/user.service');
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
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

    const user = await userService.getById(id);
    if (!user) return res.status(404).json({ message: 'usuario não encontrado' });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const getByIdAndEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;

    const user = await userService.getByIdAndEmail(id, email);
    if (!user) return res.status(404).json({ message: "Usuario não encontrado" });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const createUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;

    const newUser = await userService.createUser(fullName, email);

    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const updateUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;

    const updateUser = await userService.updateUser(fullName, email);
    if (!updateUser) return res.status(404).json({ message: 'Não foi possível criar usuario' });

    return res.status(200).json(updateUser);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    
    return res.status(200).json({ message: 'Usuario deletado' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};