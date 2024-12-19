"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Places",
      [
        {
          name: "Hà Nội",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thành phố Hồ Chí Minh",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Places", null, {});
  },
};