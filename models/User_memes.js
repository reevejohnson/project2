module.exports = function(sequelize, DataTypes) {
  var Meme = sequelize.define('Meme', {
    link: DataTypes.STRING
  });

  Meme.associate = function(models) {
    Meme.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }; 
  
  return Meme;
};
  