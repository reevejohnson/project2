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
      all_memes.create({
        link: 'https://www.lifewire.com/thmb/UPGUEX11sdxdNW1xcZr0OMPMtUw=/996x652/filters:no_upscale()/chucknorrisshowercry-5ac2b2f63418c60037493750.JPG'
      });
      all_memes.create({
        link: 'https://www.lifewire.com/thmb/N8bKQjVsl0xY_ThjlsjN4IgqS2s=/310x308/filters:no_upscale()/dog-58072d563df78cbc28f21417.jpeg'
      });
      all_memes.create({
        link: 'https://i.kym-cdn.com/photos/images/newsfeed/000/100/156/WkIrI.jpg?1297815739'
      });
      all_memes.create({
        link: 'https://imgix.ranker.com/user_node_img/50007/1000134030/original/the-most-interesting-man-on-punctuality-photo-u2?w=650&q=50&fm=jpg&fit=crop&crop=faces'
      });
      all_memes.create({
        link: 'https://i.imgflip.com/x7wmt.jpg'
      });
      all_memes.create({
        link: 'https://imgix.ranker.com/user_node_img/50009/1000169574/original/success-kid-owns-his-mom-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces'
      });
      all_memes.create({
        link: 'https://i.pinimg.com/originals/a0/c1/7c/a0c17c60a0c27122fdca7b8944471ee5.jpg'
      });
      all_memes.create({
        link: 'https://theawesomedaily.com/wp-content/uploads/2017/07/meme-faces-feat-good-1-620x350.jpg'
      });
      all_memes.create({
        link: 'https://i.kym-cdn.com/entries/icons/original/000/000/281/wolfiemoonie.jpg'
      });
      all_memes.create({
        link: 'http://photos.gleuch.com/data/assets/kanye_imma_bookmarklet.png'
      });
      all_memes.create({
        link: 'https://i.ytimg.com/vi/_KbgD3dl_08/maxresdefault.jpg'
      });
      all_memes.create({
        link: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/The_Man_Your_Man_Could_Smell_Like.JPG/300px-The_Man_Your_Man_Could_Smell_Like.JPG'
      });
      all_memes.create({
        link: 'http://www.everseradio.com/wp-content/uploads/2011/04/sad-keanu.jpg'
      });
      all_memes.create({
        link: 'https://i.kym-cdn.com/photos/images/original/000/128/373/839283bf-0257-4349-946b-254b3dc84950.jpg'
      });
      all_memes.create({
        link: 'https://i.kym-cdn.com/entries/icons/mobile/000/005/608/nyan-cat-01-625x450.jpg'
      });
      all_memes.create({
        link: 'https://cdn-images-1.medium.com/max/1600/1*Sd1a-I0X6ZChhKS7bIh5oQ.jpeg'
      });
      all_memes.create({
        link: 'https://i.pinimg.com/236x/1a/ca/52/1aca52a0bada4f6f17cc43a0d8b85c6e.jpg'
      });
      all_memes.create({
        link: 'https://i.imgflip.com/nyptd.jpg'
      });
      all_memes.create({
        link: 'https://i.imgflip.com/sxgba.jpg'
      });
      all_memes.create({
        link: 'https://i.imgflip.com/1rs0h2.jpg'
      });
      all_memes.create({
        link: 'https://www.catster.com/wp-content/uploads/2015/08/grumpy-cat-meme-00.jpg'
      });
      all_memes.create({
        link: 'https://i.ytimg.com/vi/403HqUVu1Aw/hqdefault.jpg'
      });
      all_memes.create({
        link: 'https://i.kym-cdn.com/photos/images/newsfeed/000/386/186/0f1.jpg'
      });
      all_memes.create({
        link: 'https://i.imgflip.com/k2o6y.jpg'
      });
      all_memes.create({
        link: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Original_Doge_meme.jpg/300px-Original_Doge_meme.jpg'
      });
    });
  return all_memes;
};