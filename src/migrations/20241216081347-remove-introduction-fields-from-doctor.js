"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Doctors", "introductionHTML");
    await queryInterface.removeColumn("Doctors", "introductionMarkdown");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Doctors", "introductionHTML", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Doctors", "introductionMarkdown", {
      type: Sequelize.TEXT,
    });
  },
};
