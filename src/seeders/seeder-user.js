"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "admin",
          email: "admin@gmail.com",
          password:
            "$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy", //123456
          address: "New York",
          phone: "088456732",
          avatar: "avatar-default.png",
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dr Nhat Minh",
          email: "doctor@gmail.com",
          password:
            "$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy", //123456
          address: "Hà Nội",
          phone: "088456735",
          avatar: "doctor3.jpg",
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CV Nhat Minh",
          email: "supporter@gmail.com",
          password:
            "$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy", //123456
          address: "Arizona",
          phone: "088456736",
          avatar: "supporter.png",
          roleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
