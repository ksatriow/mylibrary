# MyLibrary-ORM

Implement CRUD Book using PERN
Simple way to get started with a Express server with PostgreSQL with Node.js.

## Features

- Javascript
- Node
- PostgreSQL
- Express
- Sequalize
- REST API

## Procedure

- install library express -> npm install express
- install library postgresql -> npm install -g pg pg-hstore
- install library sequelize -> npm install sequelize-cli -g
- Inisialisasi adapter sequelize: sequelize init
- Melakukan konﬁgurasi untuk sequelize dengan cara mengedit ﬁle conﬁg/conﬁg.json (disesuaikan dengan database lokal postgre) baik dari username, password, database, host dan dialec
- Jalankan perintah sequelize db:create untuk membuat database
  Kemudian membuat tabel dengan perintah (sequelize model:generate --name book --attributes kode_buku:integer,judul:STRING,kategori:STRING,penulis:STRING,penerbit:STRING,bahasa:STRING,halaman:integer)
- Selanjutnya jalankan migrasi untuk setup database, agar bisa dipakai oleh model dengan perintah -> (sequelize db:migrate)
- Setup selesai selanjutnya database bisa digunakan untuk proses CRUD
- Kemudian run server.js
- Terakhir lakukan pengujian CRUD dengan Postman

### GET Routes

- base url http://localhost:3000
  ### Get All Book
  - /books
  ### Get A Book
  - /books/id
  ### Post A Book
  - /books/create
    ```json
    {
      "kode_buku": 1,
      "judul": "Android Apprentice (Second Edition)",
      "kategori": "Android",
      "penulis": "Darryl Bayliss",
      "penerbit": "Razeware LLC",
      "bahasa": "english",
      "halaman": 676
    }
    ```
  ### Update A Book
  - /books/id
    ```json
    {      
      "judul": "Dagger Hilt",
      "kategori": "Android",
      "penulis": "Smith",
      "penerbit": "Packt",
      "bahasa": "france",
      "halaman": 456
    }
    ```
  ### Delete A Book
  - /books/id
