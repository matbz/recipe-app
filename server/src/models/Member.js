const db = require('../db');
const SQL = require('sql-template-strings');

class Member {
  constructor(data) {
    this.init(data);
  }

  init(data) {
    if (!data) {
      return;
    }
    this.id = data.id;
    this.name = data.name;
    this.sex = data.sex;
  }

  async all() {
    try {
      const query = SQL`select * from member order by name`;

      return await db.manyOrNone(query);
    } catch (error) {
        console.log(error);
    }
  }

  async create(data) {
    const {
      name,
      sex
    } = data;

    try {
      const query = SQL`
      insert into member
      (name, sex)
      values
      (${name}, ${sex})
      `;
      return await db.none(query);
    } catch (error) {
        console.log(error);
    }
  }

  async update(data) {
    const {
      name,
      active,
      id,
    } = data;

    try {
      const query = SQL`
      update member
      set
        name = ${name},
        active = ${active}
      where id = ${id}
      `;
      return await db.none(query);
    } catch (error) {
        console.log(error);
    }
  }

  async delete(ids) {
    try {
      let query = '';
      if (Array.isArray(ids)) {
        query = SQL`
        delete from member
        where
          id = ANY(${ids})
        `;
      } else {
        query = SQL`
        delete from member
        where
          id = ${ids}
        `;
      }
      return await db.none(query);
    } catch (error) {
        console.log(error);
    }
  }
}

module.exports = Member;
