module.exports = app => {

    //PersonControllerı routes'a import ediyorum
    const persons = require("../controllers/person.controller.js");
    
    // Person ekleme
    app.post("/persons/addData", persons.create);

    // Person listeleme
    app.get("/persons/getAll", persons.getAll);


};
