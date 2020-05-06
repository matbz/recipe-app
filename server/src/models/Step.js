const db = require('../db');
const SQL = require('sql-template-strings');

class Step {
  constructor(data) {
    this.init(data);
  }

  init(data) {
    if (!data) {
      return;
    }
    this.id = data.id;
    this.step = data.step;
    this.position = data.position;
    this.recipe_id = data.recipe_id;
  }

  async all(id) {
    try {
      
      const query = SQL`select * from recipestep where recipe_id = ${id} order by position`;

      return await db.manyOrNone(query);
    } catch (error) {
        console.log(error);
    }
  }
}

module.exports = Step;
