module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    score: DataTypes.INTEGER
  });
  User.associate = function(models) {
    User.hasMany(models.User, {
      onDelete: "cascade"
    });
  };
  return User;
};
