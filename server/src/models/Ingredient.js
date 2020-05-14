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
    this.quantity = data.quantity;
    this.measurement = data.measurement;
    this.identifier = data.identifier;
    this.position = data.position;
    this.ingredientgroup_id = this.ingredientgroup_id;
  }

  async index() {
    try {
      const query = SQL`
      select
        i.name,
        i.quantity,
        i.measurement,
        i.identifier,
        i.position,
        i.ingredientgroup_id,
        ig.recipe_id
      from ingredientgroup as ig
      inner join ingredient as i on i.ingredientgroup_id = ig.id
      order by i.position
          `;

      return await db.manyOrNone(query);
    } catch (error) {
        console.log(error);
    }
  }

  async all(id) {
    try {
      const query = SQL`
      select
        i.name,
        i.quantity,
        i.measurement,
        i.identifier,
        i.position,
        i.ingredientgroup_id
      from ingredientgroup as ig
      inner join ingredient as i on i.ingredientgroup_id = ig.id
      where recipe_id = ${id}
      order by i.position
          `;

      return await db.manyOrNone(query);
    } catch (error) {
        console.log(error);
    }
  }
}

module.exports = Ingredient;
