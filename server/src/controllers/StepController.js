const Step = require('../models/Step');

module.exports = {
  async index(req, res) {
    const step = new Step();
    try {
      const results = await step.all(req.params.id);

      res.json(results);
    } catch (err) {
      res.status(500).json({
       error: 'An error has occured trying to get all categories'
      });
    }
  }
};
