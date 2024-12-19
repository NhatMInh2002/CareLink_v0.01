"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Clinics",
      [
        {
          name: "Bệnh viện Bạch Mai",
          address: "78 Đường Giải Phóng, Phương Mai, Đống Đa, Hà Nội, Việt Nam",
          image: "bach-mai-hospital.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bệnh viện Chợ Rẫy",
          address:
            "201B Nguyễn Chí Thanh, Phường 12, Quận 5, TP. Hồ Chí Minh, Việt Nam",
          image: "cho-ray-hospital.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bệnh viện Hữu nghị Việt Đức",
          address: "40 Phủ Doãn, Hàng Bông, Hoàn Kiếm, Hà Nội, Việt Nam",
          image: "viet-duc-hospital.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Phòng khám Đa khoa Quốc tế Vinmec",
          address: "458 Minh Khai, Vĩnh Tuy, Hai Bà Trưng, Hà Nội, Việt Nam",
          image: "vinmec-international-clinic.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Clinics", null, {});
  },
};
