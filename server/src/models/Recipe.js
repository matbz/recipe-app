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
}

module.exports = Recipe;
