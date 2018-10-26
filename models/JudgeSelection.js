module.exports = function(sequelize, DataTypes) {
  var JudgeSelection = sequelize.define('JudgeSelection', {
    link: DataTypes.STRING
  });
  return JudgeSelection;
};