'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode_buku: {
        type: Sequelize.INTEGER
      },
      judul: {
        type: Sequelize.STRING
      },
      kategori: {
        type: Sequelize.STRING
      },
      penulis: {
        type: Sequelize.STRING
      },
      penerbit: {
        type: Sequelize.STRING
      },
      bahasa: {
        type: Sequelize.STRING
      },
      halaman: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};