'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  book.init({
    kode_buku: DataTypes.INTEGER,
    judul: DataTypes.STRING,
    kategori: DataTypes.STRING,
    penulis: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    bahasa: DataTypes.STRING,
    halaman: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};