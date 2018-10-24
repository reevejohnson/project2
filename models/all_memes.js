module.exports = function(sequelize, DataTypes) {
    var all_memes = sequelize.define("all_memes", {
        link: DataTypes.STRING
    });
    return all_memes;
};