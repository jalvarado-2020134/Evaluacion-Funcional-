const express = require("express");
const controlador = require("../controllers/usuario.controller");
var api = express.Router();

api.post("/registro", controlador.registro);
api.get("/edades", controlador.reporteEdades);
api.get("/carreras/:Carrera", controlador.reporteCarreras);
api.get("/poesia/:Tipo", controlador.reportePoesia);

module.exports = api;
