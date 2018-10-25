module.exports = function(sequelize, DataTypes) {
    var all_memes = sequelize.define("all_memes", {
        link: DataTypes.STRING
    });
    all_memes.sync().then(() => {
        all_memes.create({
          link: 'https://pbs.twimg.com/media/DXbemHyVMAAb3v0.jpg'
        });
        all_memes.create({
          link: 'https://pbs.twimg.com/media/Dbu2bInVwAABRto.jpg'
        });
        all_memes.create({
          link: 'https://pbs.twimg.com/media/Dgod7B4UYAEB0U6.jpg'
        });
        all_memes.create({
          link: 'https://pbs.twimg.com/media/DluiUn0X0AQqQkY.jpg'
        });
        all_memes.create({
          link: 'https://pbs.twimg.com/media/DgqwSzhXUAEyShm.jpg'
        });
      });
    return all_memes;
};

