const { Card } = require("../models/Card");
const joi = require("joi");

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const result = await Card.find({}).sort({ title: 1 });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "error getting vacations" });
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
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "error get the vacation" });
    }
  },

  add: async function (req, res, next) {
    try {
      const scheme = joi.object({
        title: joi.string().required(),
        Image: joi.string().required(),
        description: joi.string().min(1),
        phone: joi.string().required(),
        address: joi.string().required(),
        card_number: joi.string().required(),
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
        Image: joi.string().required(),
        description: joi.string().min(1),
        phone: joi.string().required(),
        address: joi.string().required(),
        card_number: joi.string().required(),
      });

      const { error, value } = scheme.validate(req.body);

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
};
