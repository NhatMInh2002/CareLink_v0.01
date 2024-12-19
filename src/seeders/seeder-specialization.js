"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Specializations",
      [
        {
          name: "Nội khoa",
          image: "internal-medicine.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ngoại khoa",
          image: "surgery.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tim mạch",
          image: "cardiology.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tai Mũi Họng",
          image: "otolaryngology.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thần kinh",
          image: "neurology.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nhi khoa",
          image: "pediatrics.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sản phụ khoa",
          image: "obstetrics.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Da liễu",
          image: "dermatology.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chấn thương chỉnh hình",
          image: "orthopedics.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ung bướu",
          image: "oncology.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tiêu hóa - Gan mật",
          image: "gastroenterology.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thận - Tiết niệu",
          image: "urology.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nội tiết - Đái tháo đường",
          image: "endocrinology.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hô hấp",
          image: "pulmonology.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hồi sức - Cấp cứu",
          image: "emergency.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Y học cổ truyền",
          image: "traditional-medicine.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Răng Hàm Mặt",
          image: "dentistry.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mắt",
          image: "ophthalmology.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Phục hồi chức năng",
          image: "rehabilitation.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tâm thần",
          image: "psychiatry.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Specializations", null, {});
  },
};
