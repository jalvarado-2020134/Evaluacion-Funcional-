const express = require("express");
const cors = require("cors");
let app = express();

const rutaUsuario = require("./src/routes/usuario.routes");
const rutaPoesia = require("./src/routes/poesia.routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use("/prueba", rutaUsuario, rutaPoesia);

module.exports = app;
