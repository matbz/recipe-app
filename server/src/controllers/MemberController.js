const Member = require('../models/Member');

module.exports = {
  async index(req, res) {
    const member = new Member();
    try {
      const results = await member.all();

      res.json(results);
    } catch (err) {
      res.status(500).json({
       error: 'An error has occured trying to create an Member'
      });
    }
  },
  async create(req, res) {
    const member = new Member();
    try {
      await member.create(req.body);
      res.json(req.body);
    } catch (err) {
      res.status(500).json({
       error: 'An error has occured trying to create an Member'
      });
    }
  },
  async delete(req, res) {
    const member = new Member();
    try {
      await member.delete(req.body);
      res.json(req.body);
    } catch (err) {
      res.status(500).json({
       error: 'An error has occured trying to create an Member'
      });
    }
  },
  async update(req, res) {
    const member = new Member();
    try {
      await member.update(req.body);
      res.json(req.body);
    } catch (err) {
      res.status(500).json({
       error: 'An error has occured trying to create an Member'
      });
    }
  },
};
