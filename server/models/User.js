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
    require: true,
    minlength: 8,
    maxlength: 1024,
  },

  user_id:{
    type:String
},
  
  isAdmin: {
    type: Boolean,
    require: false,
    default: false,
   
  },
  cards:[{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],

    createdAt: { type: Date, default: Date.now },
   
    favorites: [{type: mongoose.Schema.Types.ObjectId,
        ref: "Card"}]
});

// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign(
//       { _id: this._id, isAdmin: this.isAdmin },
//       config.get('jwtKey')
//   );
//   return token;
// };

const User = mongoose.model("user", userSchema);

exports.User = User;
