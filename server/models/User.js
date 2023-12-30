const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 256,
  },

  lastName: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 256,
  },
 
  email: {
    type: String,
    require: true,
    minlength: 4,
    maxlength: 256,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
  
  isAdmin: {
    type: Boolean,
    default: false,
   
  },
  favorites:
[{
  type:mongoose.Schema.Types.ObjectId,
  ref: "Card"}] 
});

const User = mongoose.model("user", userSchema);

exports.User = User;
