module.exports = function(sequelize, DataTypes) {
  var Meme = sequelize.define("User_memes", {
    user_id:DataTypes.STRING,
    meme: DataTypes.STRING
  });
  Meme.associate = function(models) {
    Meme.belongsTo(models.User)
  }; 
  return Meme;
};
  