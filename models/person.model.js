const sql = require("./db.js");


// constructor
const Person = function(person) {
    this.name = person.name;
    this.age = person.age;
    this.count = person.count;
    this.createdDate = person.createdDate;
  };
  
  // Person tablosu insert işlemi
  Person.create = (newPerson, result) => {
    sql.query("INSERT INTO person SET ?", newPerson, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Oluşturulan kişi: ", { id: res.insertId, ...newPerson });
      result(null, {message :"Ekleme Başarılı" ,data : { id: res.insertId, ...newPerson }});
    });
  };

  // Person tablosu listeme
  Person.getAll = result => {
    sql.query("SELECT * FROM person", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("persons: ", res);
      result(null, res);
    });
  };

  module.exports = Person;
