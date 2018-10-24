module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User_info", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    score: DataTypes.INT 
  });
  User.associate = function(models) {
    User.hasMany(models.User_memes, {
      onDelete: "cascade"
    });
  };
  return User;
};
