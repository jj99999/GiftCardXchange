var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = new Schema({
  code: {
    type: String,
  },
  brand: {
  	type: String,
  },
   toggle: {
   state: Boolean,
  },
});

var Card = mongoose.model('Term', CardSchema);
module.exports = Card;
