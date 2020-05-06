const db = require('../db');
const SQL = require('sql-template-strings');

class Category {
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
    this.imgpath = data.imgpath;
  }

  async all() {
    try {
      const query = SQL`select * from recipecategory order by position`;

      return await db.manyOrNone(query);
    } catch (error) {
        console.log(error);
    }
  }
}

module.exports = Category;
