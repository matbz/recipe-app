const db = require('../db');
const SQL = require('sql-template-strings');

class Recipe {
  constructor(data) {
    this.init(data);
  }

  init(data) {
    if (!data) {
      return;
    }
    this.id = data.id;
    this.name = data.name;
    this.portions = data.portions;
    this.imgpath = data.imgpath;
  }

  async index() {
    try {
      const query = SQL`select * from recipe order by name`;

      return await db.manyOrNone(query);
    } catch (error) {
        console.log(error);
    }
  }

  async all(categoryid) {
    try {
      const query = SQL`select * from recipe where recipecategory_id = ${categoryid} order by name`;

      return await db.manyOrNone(query);
    } catch (error) {
        console.log(error);
    }
  }

  async findById(id) {
    try {
      const query = SQL`select * from recipe where id = ${id}`;

      return await db.manyOrNone(query);
    } catch (error) {
        console.log(error);
    }
  }

  async full() {
    try {
      const query = SQL`
      select
      r.id,
      r.name,
      i.name as iname,
      c.name as cname,
      s.step as step
      from recipe as r
      left join recipecategory as c on c.id = r.recipecategory_id
      full outer join recipestep as s on s.recipe_id = r.id
      full outer join ingredientgroup as ig on ig.recipe_id = r.id
      full outer join ingredient as i on i.ingredientgroup_id = ig.id
      order by r.id
      `;

      return await db.manyOrNone(query);
    } catch (error) {
        console.log(error);
    }
  }
}

module.exports = Recipe;
