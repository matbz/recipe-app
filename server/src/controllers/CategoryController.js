const Category = require('../models/Category');

module.exports = {
  async index(req, res) {
    const category = new Category();
    try {
      const results = await category.all();

      res.json(results);
    } catch (err) {
      res.status(500).json({
       error: 'An error has occured trying to get all categories'
      });
    }
  }
};
