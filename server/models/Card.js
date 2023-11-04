const { number, string } = require("joi");
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
  imageUrl: {
    type: String,
    require: true,
  },
  imageAlt: {
    type: String,
    require: true,
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
    require: false,
  },
  state: {
    type: String,
    require: false,
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
    type: String,
    require: true,
  },
  houseNumber: {
    type: String,
    require: true,
  },
});

const Card = mongoose.model("card", cardSchema);

exports.Card = Card;
