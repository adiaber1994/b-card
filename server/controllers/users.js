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

      const param = { email: value.email };
      const token = jwt.sign(param, config.jwt_token, { expiresIn: "72800s" });

      res.json({
        token: token,
        id: user._id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send("Invalid data.");
    }
  },

  signup: async function (req, res, next) {
    const schema = joi.object({
      firstName: joi.string().required().min(2).max(256),
      middeleName: joi.string().min(2).max(256),
      lastName: joi.string().required().min(2).max(256),
      Phone: joi.string().min(9).max(15).required(),
      email: joi.string().min(6).max(255).required().email(),
      password: joi.string().min(8).max(256).required(),
      imageUrl: joi.string().min(6).max(255),
      imageAlt: joi.string().min(6).max(255),
      state: joi.string().min(6).max(255),
      country: joi.string().min(6).max(255).required(),
      city: joi.string().min(6).max(255).required(),
      street: joi.string().min(6).max(255).required(),
      houseNumber: joi.number().min(6).max(255).required(),
      zip: joi.number().min(6).max(255),
      business: joi.boolean(),
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
        middeleName: value.middeleName,
        lastName: value.lastName,
        phone: value.phone,
        email: value.email,
        password: hash,
        imageUrl: value.imageUrl,
        imageAlt: value.imageAlt,
        state: value.state,
        country: value.country,
        city: value.city,
        street: value.street,
        houseNumber: value.houseNumber,
        zip: value.zip,
        business: value.business,
      });

      await newUser.save();

      res.json({
        firstName: newUser.firstName,
        middeleName: newUser.middeleName,
        lastName: newUser.lastName,
        phone: newUser.phone,
        email: newUser.email,
        password: hash,
        imageUrl: newUser.imageUrl,
        imageAlt: newUser.imageAlt,
        state: newUser.state,
        country: newUser.country,
        city: newUser.city,
        street: newUser.street,
        houseNumber: newUser.houseNumber,
        zip: newUser.zip,
        business: newUser.business,
      });
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ error: "error sign up new user" });
    }
  },
};
