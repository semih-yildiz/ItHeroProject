const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Bağlantı bilgileri
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port : dbConfig.PORT

});

// Mysql bağlantısını açtım
connection.connect(error => {
  if (error) throw error;
  console.log("Veritabanına başarıyla bağlandı.");
});

module.exports = connection;