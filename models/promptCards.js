module.exports = function(sequelize, DataTypes) {
    var promptCards = sequelize.define("promptCards", {
        text: DataTypes.STRING
    });
    promptCards.sync().then(() => {
        promptCards.create({
          text: 'When you act like you don\'t know someone is taking a picture of you cuz you think it\'ll make you look cooler.'
        });
        promptCards.create({
          text: 'When you are trying not to cough and you already coughed twice but you don\'t want people thinking you\'re super sick.'
        });
        promptCards.create({
          text: 'When you are dead and you realize you don\'t have to go to work anymore because you are dead.'
        });
        promptCards.create({
          text: 'When you are hitting on the cashier and they say your card is declined.'
        });
        promptCards.create({
          text: 'When you push your sibling too hard and frantically apologize before your mom sees.'
        });
        promptCards.create({
          text: 'When you hear someone saying your name in a conversation.'
        });
        promptCards.create({
          text: 'When you see your ex with the same person they told you not to worry about.'
        });
        promptCards.create({
          text: 'When the barber asks if the haircut is okay but you low key wanna die.'
        });
        promptCards.create({
          text: 'When you are finally at home and you can be yourself.'
        });
        promptCards.create({
          text: 'When you are on the verge of a breakdown but you are trying to stay positive.'
        });
        promptCards.create({
          text: 'When you see someone else playing Pokémon Go.'
        });
        promptCards.create({
          text: 'When you just wanna text and the person decides to call you.'
        });
        promptCards.create({
          text: 'When you\'re all dressed up and your friends cancel plans.'
        });
        promptCards.create({
          text: 'When you are home alone and you hear a noise.'
        });
        promptCards.create({
          text: 'When your shower is too hot and it hits your back.'
        });
        promptCards.create({
          text: 'When you thought someone waved to you so you try to play it off.'
        });
        promptCards.create({
          text: 'When you\'re feeling sad but you realize that you have no reason to be, which makes you feel worse.'
        });
        promptCards.create({
          text: 'When you\'re about to leave work and the boss says "Before you go...".'
        });
        promptCards.create({
          text: 'When you\'re on a diet so you only have 1 slice.'
        });
        promptCards.create({
          text: 'When you\'re trying to sneak back in your house late at night but you don\'t want to wake your mom.'
        });
        promptCards.create({
          text: 'When you\'re chilling with someone and you think about how you never want to chill with them again.'
        });
        promptCards.create({
          text: 'When you\'re washing the dishes and someone adds a dish in.'
        });
        promptCards.create({
          text: 'When the teacher is about to switch the powerpoint slide and you\'re still not done taking notes.'
        });
        promptCards.create({
          text: 'When you\'re trying to sneak a pic and auto flash goes off.'
        });
        promptCards.create({
          text: 'When you\'re hungry, haven\'t napped or showered, and your significant other is trying to be cute.'
        });
      });
    return promptCards;
};