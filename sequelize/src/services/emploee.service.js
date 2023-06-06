
const { Address, Employee } = require('../models');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const emploee = await Employee.findOne({
    where: { id },
    include: [{ model: Address, as: 'addresses' }]
  });

  return emploee;
};

module.exports = {
  getAll,
  getById,
};