const Recipe = require('../models/Recipe');

module.exports = {
  async index(req, res) {
    const recipe = new Recipe();
    try {
      const results = await recipe.all(req.params.categoryid);

      res.json(results);
    } catch (err) {
      res.status(500).json({
       error: 'An error has occured trying to get all categories'
      });
    }
  },
  async get(req, res) {
    const recipe = new Recipe();
    try {
      const results = await recipe.findById(req.params.id);

      res.json(results);
    } catch (err) {
      res.status(500).json({
       error: 'An error has occured trying to get all categories'
      });
    }
  }
};
