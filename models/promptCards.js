module.exports = function(sequelize, DataTypes) {
    var promptCards = sequelize.define("promptCards", {
        link: DataTypes.STRING
    });
    return promptCards;
};