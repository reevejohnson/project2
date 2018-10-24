module.exports = function(sequelize, DataTypes) {
  var Meme = sequelize.define("Meme", {
    user_id: DataTypes.STRING,
    link: DataTypes.STRING
  });

  Meme.associate = function(models) {
    Meme.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }; 
  
  return Meme;
};
  