const db = require('../db');
const SQL = require('sql-template-strings');

class Ingredient {
  constructor(data) {
    this.init(data);
  }

  init(data) {
    if (!data) {
      return;
    }
    this.id = data.id;
    this.name = data.name;
    this.position = data.position;
    this.recipe_id = this.recipe_id;
  }

  async all(id) {
    try {
      const query = SQL`select * from ingredientgroup where recipe_id = ${id} order by position`;

      return await db.manyOrNone(query);
    } catch (error) {
        console.log(error);
    }
  }
}

module.exports = Ingredient;
