module.exports = function(sequelize, DataTypes) {
    var SelectedPrompt = sequelize.define("SelectedPrompt", {
        text: DataTypes.STRING
    });
    return SelectedPrompt;
};