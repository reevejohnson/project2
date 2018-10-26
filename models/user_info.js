module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: type.INTEGER, 
      primaryKey: true, 
      autoIncrement: true
    },
username: {
  type: type.STRING,
      allowNull: false
},
    email: {
      type: type.STRING,
      allowNull: false
    },
  password: {
    type: type.STRING,
      allowNull: false
  },
    score:
      DataTypes.INTEGER
  
  });
  User.associate = function(models) {
    User.hasMany(models.User, {
      onDelete: "cascade"
    });
  };
  return User;
};
