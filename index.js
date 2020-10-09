const express = require("express");
const app = express();


//Post datasını parse etme
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
require("./routes/person.routes.js")(app);

//Listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`localhost:${port} -> Api Çalışıyor ! `);
  });