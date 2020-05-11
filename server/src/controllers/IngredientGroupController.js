const IngredientGroup = require('../models/IngredientGroup');

module.exports = {
  async all(req, res) {
    const ingredientGroup = new IngredientGroup();
    try {
      const results = await ingredientGroup.index();

      res.json(results);
    } catch (err) {
      res.status(500).json({
       error: 'An error has occured trying to get all categories'
      });
    }
  },
  async index(req, res) {
    const ingredientGroup = new IngredientGroup();
    try {
      const results = await ingredientGroup.all(req.params.id);

      res.json(results);
    } catch (err) {
      res.status(500).json({
       error: 'An error has occured trying to get all categories'
      });
    }
  }
};
