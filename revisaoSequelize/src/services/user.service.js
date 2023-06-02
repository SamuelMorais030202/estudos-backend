const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const getByIdAndEmail = async (id, email) => {
  const user = await User.findOne({ where: { id, email } });
  return user;
};

const createUser = async (fullName, email) => {
  const user = await User.create({ fullName, email });
  return user;
};

const updateUser = async (id, fullName, email) => {
  const [updateUser] = await User.update(
    { fullName, email },
    { where: { id } },
  );

  return updateUser;
};

const deleteUser = async (id) => {
  const user = await User.destroy(
    { where: { id } },
  );

  return user;
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};