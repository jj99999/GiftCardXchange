var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = new Schema({
  store: {
    type: String,
  },
  balance: {
  	type: Number,
  },
   code: {
   type: String,
  },
  availability: {
   type: Boolean,
  }

});

var Card = mongoose.model('Card', CardSchema);
module.exports = Card;
