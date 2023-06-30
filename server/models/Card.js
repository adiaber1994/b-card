const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const Card = mongoose.model("Card", cardSchema);

exports.Card = Card;
