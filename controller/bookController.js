const { book } = require("../models");

module.exports = {
  index: (req, res) => {
    book.findAll({}).then((article) => {
      if (article.length !== 0) {
        res.json({
          status: 200,
          message: "sukses",
          data: article,
        });
      } else {
        res.json({
          status: 400,
          message: "DATA KOSONG",
        });
      }
    });
  },
  create: (req, res) => {
    const { kode_buku, judul, kategori, penulis, penerbit, bahasa, halaman } =
      req.body;

    book
      .create({
        kode_buku,
        judul,
        kategori,
        penulis,
        penerbit,
        bahasa,
        halaman,
      })
      .then((article) => {
        res.json({
          status: 200,
          message: "DATA BERHASIL DIMASUKKAN",
          data: article,
        });
      });
  },
  update: (req, res) => {
    const userId = req.params.id;
    const query = {
      where: { id: userId },
    };

    book
      .update(
        {
          bahasa: 'indonesia',
        },
        query
      )
      .then((data) => {
        res.json({
          status: 200,
          message: "berhasil diupdate",
          data: userId,
        });
        // process.exit() // matikan server
      })
      .catch((err) => {
        res.json({
          status: 400,
          message: "data gagal diupdate",
        });
      });
  },
  show: (req, res) => {
    const userId = req.params.id;

    book
      .findOne({
        where: { id: userId },
      })
      .then((data) => {
        res.json({
          status: 200,
          message: "DATA DITEMUKAN",
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          status: 400,
          message: "DATA TIDAK DITEMUKAN",
        });
      });
  },
  delete: (req, res) => {
    const userId = req.params.id;

    book
      .destroy({
        where: { id: userId },
      })
      .then((data) => {
        res.json({
          status: 200,
          message: "DATA BERHASIL DIHAPUS",
          data: userId,
        });
      })
      .catch((err) => {
        res.json({
          status: 400,
          message: "DATA GAGAL DIHAPUS",
        });
      });
  },
};
