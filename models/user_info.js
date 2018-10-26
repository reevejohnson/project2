module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true
    },
username: {
  type: DataTypes.STRING,
      allowNull: false
},
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  password: {
    type: DataTypes.STRING,
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
