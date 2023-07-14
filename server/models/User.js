const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 256,
  },
  middeleName: {
    type: String,
    minlength: 2,
    maxlength: 256,
  },
  lastName: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 256,
  },
  phone: {
    type: String,
    require: true,
    minlength: 9,
    maxlength: 15,
  },
  email: {
    type: String,
    require: true,
    minlength: 6,
    maxlength: 256,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
  imageUrl: {
    type: String,

    minlength: 6,
    maxlength: 1024,
  },
  imageAlt: {
    type: String,

    minlength: 6,
    maxlength: 1024,
  },
  state: {
    type: String,

    minlength: 6,
    maxlength: 1024,
  },
  country: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  city: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  street: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  houseNumber: {
    type: Number,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  zip: {
    type: Number,

    minlength: 6,
    maxlength: 1024,
  },
  business: {
    type: Boolean,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
