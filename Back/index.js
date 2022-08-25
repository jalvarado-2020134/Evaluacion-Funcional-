const mongoose = require("mongoose");
const app = require("./app");
const nuevos = require("./src/controllers/poesia.controller");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb+srv://jalvarado:admin@poesia.1iuakyo.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");

    let port = process.env.PORT || 3000

    app.listen(port, function () {
      nuevos.crearGeneros();
      console.log("Running in port 3000.");
    });
  })
  .catch((error) => console.log(error));
