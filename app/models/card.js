var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = new Schema({
  cardOwnerEmail: {
    type: String,
  },
  storeName: {
    type: String,
  },
  cardBalance: {
  	type: Number,
  },
   redeemCode: {
   type: String,
  },
  tradeAvailability: {
   type: Boolean,
  }

});

var Card = mongoose.model('Card', CardSchema);
module.exports = Card;
