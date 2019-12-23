'use strict';
var bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Users', [
    {
      email: "jp@test.com",
      password: bcrypt.hashSync("test", bcrypt.genSaltSync(10), null),
      createdAt: new Date(),
      updatedAt: new Date()
    },      {
      email: "dan@test.com",
      password: bcrypt.hashSync("test", bcrypt.genSaltSync(10), null),
      createdAt: new Date(),
      updatedAt: new Date()
    },      {
      email: "chris@test.com",
      password: bcrypt.hashSync("test", bcrypt.genSaltSync(10), null),
      createdAt: new Date(),
      updatedAt: new Date()
    },      {
      email: "nick@test.com",
      password: bcrypt.hashSync("test", bcrypt.genSaltSync(10), null),
      createdAt: new Date(),
      updatedAt: new Date()
    },    {
      email: "other@email.com",
      password: bcrypt.hashSync("test", bcrypt.genSaltSync(10), null),
      createdAt: new Date(),
      updatedAt: new Date()
    }
], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
