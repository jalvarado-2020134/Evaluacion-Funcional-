const Poesias = require("../models/poesia.model");



function nuevoGenero(req, res) {
  var datos = req.body;
  if (datos.nombre == "") {
    return res.status(500).send({ Error: "Name is empty." });
  } else {
    Poesias.create({ nombre: datos.nombre }, (error, nuevoGenero) => {
      if (error)
        return res.status(500).send({ Error: "Error saving poetry gender." });
      return res.status(200).send({ Generos: nuevoGenero });
    });
  }
}

function verGeneros(req, res) {
  Poesias.find((error, generos) => {
    if (error)
      return res.status(500).send({ Error: "Error getting poetry genders." });
    return res.status(200).send({ Generos: generos });
  });
}

function crearGeneros(req, res) {
  Poesias.findOne({ nombre: "Lírica" }, (error, generosExistentes) => {
    if (error)
      return res.status(500).send({ Error: "Error gettings poetry genders." });
    if (generosExistentes) {
      console.log("This poetry gender already exists");
    } else {
      Poesias.create(
        { nombre: "Lírica" },
        { nombre: "Épica" },
        { nombre: "Dramática" },
        (error, generosCreados) => {
          if (error)
            return res
              .status(500)
              .send({ Error: "Error creating poetry genders." });
          console.log("Poetry Genders created successfully");
        }
      );
    }
  });
}

module.exports = {
  nuevoGenero,
  verGeneros,
  crearGeneros,
};
