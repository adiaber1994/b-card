const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  card_number: {
    type: String,
  },
});

const Card = mongoose.model("Cards", cardSchema);

exports.Card = Card;
