const { User } = require("../models/User");
const joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/dev");

module.exports = {
  login: async function (req, res, next) {
    const schema = joi.object({
      email: joi.string().required().min(6).max(256).email(),
      password: joi.string().required().min(6).max(1024),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      console.log(error.details[0].message);
      res.status(401).send("Unauthorized");
      return;
    }

    try {
      const user = await User.findOne({ email: value.email });
      if (!user) throw Error;
      const validPassword = await bcrypt.compare(value.password, user.password);
      if (!validPassword) throw "Invalid password";

      const param = { userId: user._id, email: value.email };
      const token = jwt.sign(param, config.jwt_token, { expiresIn: "72800s" });

      res.json({
        token: token,
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        isAdmin: user.isAdmin,
        favorites: user.favorites,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send("Invalid data.");
    }
  },

  signup: async function (req, res, next) {
    const schema = joi.object({
      firstName: joi.string().required().min(2).max(256),
      lastName: joi.string().required().min(2).max(256),
      email: joi.string().min(4).max(255).required().email(),
      password: joi.string().min(8).max(256).required(),
      isAdmin: joi.boolean().optional().allow(""),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      console.log(error.details[0].message);
      res.status(400).json({ error: "error sign up new user" });
      return;
    }

    try {
      const user = await User.findOne({ email: value.email });
      if (user) {
        return res.status(400).json({ error: "User already registered." });
      }

      const hash = await bcrypt.hash(value.password, 10);

      const newUser = new User({
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        password: hash,
      });

      await newUser.save();

      res.json({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        password: hash,
      });
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ error: "error sign up new user" });
    }
  },

  // favorite: async (req, res) => {
  //   const { cardId} = req.params;
  //   const userId = req.user.userId;
  //   try {
  //       const user = await User.findById(userId);
  //       let type;
  //       const index = (user.favorites || []).indexOf(businessId);
  //       if (index > -1) {
  //           user.favorites.splice(index, 1);
  //           type = 'Removed from';
  //       } else {
  //           user.favorites.push(businessId);
  //           type = 'Added to';
  //       }
  //       await user.save();

  //       res.status(200).send({ success: true, type });
  //   } catch (err) {
  //       console.log(err);
  //       res.status(401).send(err.message);
  //   }
  // },
};
