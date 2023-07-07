const { number } = require("joi");
const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  subtitle: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },
  ImageUrl: {
    type: String,
  },
  ImageAlt: {
    type: String,
  },
  phone: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  web: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  street: {
    type: Number,
    require: true,
  },
  houseNumber: {
    type: Number,
    require: true,
  },
});

const Card = mongoose.model("Card", cardSchema);

exports.Card = Card;
