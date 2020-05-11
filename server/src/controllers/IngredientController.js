const Ingredient = require('../models/Ingredient');

module.exports = {
  async all(req, res) {
    const ingredient = new Ingredient();
    try {
      const results = await ingredient.index();

      res.json(results);
    } catch (err) {
      res.status(500).json({
       error: 'An error has occured trying to get all categories'
      });
    }
  },
  async index(req, res) {
    const ingredient = new Ingredient();
    try {
      const results = await ingredient.all(req.params.id);

      res.json(results);
    } catch (err) {
      res.status(500).json({
       error: 'An error has occured trying to get all categories'
      });
    }
  }
};
