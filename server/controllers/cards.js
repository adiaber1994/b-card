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
        web: joi.string().optional().allow(''),
        state: joi.string().optional().allow(''), 
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
        subtitle: joi.string().optional().allow(''),
        description: joi.string().min(1).optional().allow(''),
        ImageUrl: joi.string().optional().allow(''),
        ImageAlt: joi.string().optional().allow(''),
        phone: joi.string().optional().allow(''),
        email: joi.string().optional().allow(''),
        web: joi.string(),
        state: joi.string(),
        country: joi.string().optional().allow(''),
        city: joi.string().optional().allow(''),
        street: joi.string().optional().allow(''),
        houseNumber: joi.string().optional().allow(''),
       
      });
      

      const { error, value } = scheme.validate(req.body);
      console.log (req.body)

      

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
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "fail to update data" });
        }
    },
}