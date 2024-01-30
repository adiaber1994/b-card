const express = require("express");
const _ = require("lodash");
const { Card } = require("../models/Card");
const { User } = require("../models/User");
const joi = require("joi");
// const router = express.Router();

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const result = await Card.find({}).sort({ title: 1 });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "error getting cards" });
    }
  },

  getItem: async function (req, res, next) {
    try {
      const scheme = joi.object({
        _id: joi.string().required(),
      });

      const { error, value } = scheme.validate({ _id: req.params.id });

      if (error) {
        console.log(error.details[0].message);
        res.status(400).json({ error: "invalid data" });
        return;
      }

      const result = await Card.findOne({ _id: value._id });
      return res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "error get the card" });
    }
  },

  add: async function (req, res, next) {
    try {
      const scheme = joi.object({
        title: joi.string().required(),
        subtitle: joi.string().required(),
        description: joi.string().min(1).required(),
        imageUrl: joi.string().required(),
        imageAlt: joi.string().required(),
        phone: joi.string().required(),
        email: joi.string().required().email(),
        web: joi.string().optional().allow(""),
        state: joi.string().optional().allow(""),
        country: joi.string().required(),
        city: joi.string().required(),
        street: joi.string().required(),
        houseNumber: joi.string().required(),
      });

      const { error, value } = scheme.validate(req.body);

      if (error) {
        console.log(error.details[0].message);
        res.status(400).json({ error: "invalid data" });
        return;
      }

      const newCard = new Card(value);
      const result = await newCard.save();

      res.json({
        ...value,
        _id: result._id,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "error add Card" });
    }
  },

  delete: async function (req, res, next) {
    try {
      const scheme = joi.object({
        _id: joi.string().required(),
      });

      const { error, value } = scheme.validate({ _id: req.params.id });

      if (error) {
        console.log(error.details[0].message);
        res.status(400).json({ error: "invalid data" });
        return;
      }

      const deleted = await Card.findOne({ _id: value._id });

      await Card.deleteOne(value).exec();
      res.json(deleted);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "error delete card" });
    }
  },

  edit: async function (req, res, next) {
    try {
      const scheme = joi.object({
        title: joi.string().required(),
        subtitle: joi.string().optional().allow(""),
        description: joi.string().min(1).optional().allow(""),
        imageUrl: joi.string().optional().allow(""),
        imageAlt: joi.string().optional().allow(""),
        phone: joi.string().optional().allow(""),
        email: joi.string().optional().allow(""),
        web: joi.string(),
        state: joi.string(),
        country: joi.string().optional().allow(""),
        city: joi.string().optional().allow(""),
        street: joi.string().optional().allow(""),
        houseNumber: joi.string().optional().allow(""),
      });

      const { error, value } = scheme.validate(req.body);
      console.log(req.body);

      if (error) {
        console.log(error.details[0].message);
        res.status(400).json({ error: "invalid data" });
        return;
      }

      const card = await Card.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        value
      );

      if (!card) return res.status(404).send("Given ID was not found.");

      const updated = await Card.findOne({ _id: req.params.id });
      res.json(updated);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "fail to update data" });
    }
  },

  getUserFavoriteCards: async function (req, res, next) {
    try {
      if (!req.user || !req.user.userId || !req.user.email) {
        console.error("User not authenticated or missing user ID");
        return res.status(401).json({ message: "User not authenticated" });
      }
      console.log("User ID:", req.user.userId);
      const user = await User.findById(req.user.userId).populate("favorites");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const favoriteCards = user.favorites;

      return res.status(200).json(favoriteCards);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "fail",
        message: err.message,
      });
    }
  },
  setFavorite: async function (req, res, next) {
    console.log("Token received with request:", req.header("x-auth-token"));
    // אימות קיום משתמש
    if (!req.user || !req.user.userId) {
      console.error("User not authenticated or missing user ID");
      return res.status(401).json({ message: "not working" });
    }

    const cardId = req.params.id;
    const userId = req.user.userId;

    console.log("CARD>>>", cardId);
    console.log("USERID>>>", userId);
    let status = false;

    try {
      // אימות קיום הכרטיס
      const card = await Card.findById(cardId);
      if (!card) {
        return res.status(404).json({ message: "Card not found" });
      }
      const user = await User.findOne({ email: req.user.email });
      if (!Array.isArray(user.favorites)) {
        user.favorites = [];
      }

      const userIndex = user.favorites.indexOf(cardId);
      const cardIndex = card.favorites.indexOf(userId);

      if (userIndex === -1) {
        user.favorites.push(cardId);
        status = true;
      } else {
        user.favorites.splice(userIndex, 1);
        status = false;
      }
      if (cardIndex === -1) {
        card.favorites.push(userId);
        status = true;
      } else {
        card.favorites.splice(cardIndex, 1);
        status = false;
      }

      await user.save();
      await card.save();

      const { title } = card;
      return res.status(200).json({ title, status });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "fail",
        message: err.message,
      });
    }
  },
};



