const Person = require("../models/person.model.js");//Person için oluşturduğum modeli ekledim
const axios = require('axios');//ApiCall için axios kütüphanesini ekledim

// Person Oluşturma Metodu
exports.create = (req, res) => {

    // Request Kontrolü 
    if (!req.body.name) {
        res.status(400).send({
          message: "İsim boş bırakılamaz!"
        });
    }
    
    // Api     
    const URI = 'https://api.agify.io/?name='+req.body.name;
    const encodedURI = encodeURI(URI);        
    axios.get(encodedURI)
    .then(response => {
        //Apiden gelen dataları modele ekleme
        const person = new Person({                
            name: req.body.name,
            age: response.data.age,
            count: response.data.count,
            createdDate : created = new Date()    
        });
     
        // Person tablosu kayıt işlemi
        Person.create(person, (err, data) => {
            if (err)
            res.status(500).send({
                message:
                err.message || "Kişi oluşturulurken bir hata meydana geldi."
            });
            else res.send(data);
        });

    })
    .catch(error => {
      console.log(error);
    });    
 };

 //Person Listeme Metodu
 exports.getAll = (req, res) => {
    Person.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Kişiler listelenirken  bir hata meydana geldi."
        });
      else res.send(data);
    });
  };
