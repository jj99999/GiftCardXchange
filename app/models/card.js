var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = new Schema({
  store: {
    type: String,
  },
  balance: {
  	type: String,
  },
   code: {
   type: String,
  },
  avaliability: {
   type: Boolean,
  }

});

var Card = mongoose.model('Term', CardSchema);
module.exports = Card;
