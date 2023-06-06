const EmployeeService = require('../services/emploee.service');

const getAll = async (_req, res) => {
  try {
    const employees = await EmployeeService.getAll();
    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
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
    const emploee = await EmployeeService.getById(id);

    if (!emploee) return res.status(404).json({ message: 'Employee not found' });

    return res.status(200).json(emploee);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAll,
  getById,
};