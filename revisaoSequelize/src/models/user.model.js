
const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  }, {
    tablename: 'users',
    underscore: true,
  });

  (async () => {
    await sequelize.sync({ force: false });
    // As funções vão aqui
})();

  return User;
};

module.exports = UserModel;