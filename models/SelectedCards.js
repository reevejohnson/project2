module.exports = function(sequelize, DataTypes) {
    var SelectedCards = sequelize.define("SelectedCards", {
        link: DataTypes.STRING
    });
    return SelectedCards;
};