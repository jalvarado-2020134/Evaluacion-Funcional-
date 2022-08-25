import React, { useState,  useContext } from "react";
import axios from "axios";
import "../style/registro.css";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/Contexto";
const Registro = () => {
  const { poesias } = useContext(DataContext);

  const [fecha, setFecha] = useState(Date);
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [genero, setGenero] = useState("");
  const [telefono, setTelefono] = useState("");
  const [carrera, setCarrera] = useState("");
  const [poesia, setPoesia] = useState("");
  const [carnet, setCarnet] = useState("");

  

  const [] = useState("");
  
  var navigate = useNavigate();

  const agregarUsuario = (event) => {
    var usuario = {
      nombre: nombre,
      direccion: direccion,
      genero: genero,
      telefono: telefono,
      nacimiento: fecha,
      carrera: carrera,
      generoPoesia: poesia,
      carnet: carnet,
    };
    event.preventDefault();
    axios
      .post("https://concurso-poesia.herokuapp.com/prueba/registro", usuario)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Te has registrado exitosamente",
        }).then(navigate("/inicio"));
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: error.response.data.Error,
        });
      });
  };


  return (
    <>
      <Navbar />
      <form>
        {" "}
        <div className="form">
          <div className="form-body">
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      required
                      placeholder="Nombre Completo"
                      name="nombre"
                      value={nombre}
                      onChange={(n) => {
                        setNombre(n.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    name="direccion"
                    value={direccion}
                    onChange={(n) => {
                      setDireccion(n.target.value);
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Dirección"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <select
                    name="genero"
                    value={genero}
                    onChange={(n) => {
                      setGenero(n.target.value);
                    }}
                    type="text"
                    className="form-control"
                    required
                    placeholder="Género"
                  >
                    <option value={""} disabled selected hidden>
                      Selecciona tu género
                    </option>
                    <option value={"Masculino"}>Masculino</option>
                    <option value={"Femenino"}>Femenino</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    name="telefono"
                    value={telefono}
                    onChange={(n) => {
                      setTelefono(n.target.value);
                    }}
                    type="text"
                    className="form-control"
                    required
                    placeholder="Número Teléfonico"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <select
                  name="generoPoesia"
                  value={poesia}
                  onChange={(n) => {
                    setPoesia(n.target.value);
                  }}
                  type="text"
                  className="form-control"
                  required
                  placeholder="Género de poesía"
                >
                  <option selected disabled hidden value={""}>
                    Selecciona tu poesia
                  </option>
                  {}
                  {poesias.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.nombre}
                    </option>
                  ))}
                </select>
                <br />
                
                
              </div>
              <div className="col">
                <div className="form-outline">
                  <select
                    name="carrera"
                    value={carrera}
                    onChange={(n) => {
                      setCarrera(n.target.value);
                    }}
                    className="form-control"
                    type="text"
                    required
                    placeholder="Carrera"
                  >
                    <option value={""} disabled selected hidden>
                      Selecciona tu carrera
                    </option>
                    <option value={"Ingenieria"}>Ingenieria</option>
                    <option value={"Administración"}>Administración</option>
                    <option value={"Derecho"}>Derecho</option>
                    <option value={"Medicina"}>Medicina</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              Ingresa tu fecha de nacimiento
              <input
                
                type="date"
                placeholder="Fecha de"
                className="form-control"
                required
                name="nacimiento"
                value={fecha}
                onChange={(n) => {
                  setFecha(n.target.value);
                }}
              />
            </div>

            <div className="form-outline mb-4">
              <input
                name="carnet"
                value={carnet}
                onChange={(n) => {
                  setCarnet(n.target.value);
                }}
                type="text"
                className="form-control"
                required
                minLength={6}
                maxLength={6}
                placeholder="Carnet (6 carácteres, Ejemplo: A*5**9)"
                formNoValidate={false}
              />
            </div>
          </div>
          <div className="footer">
            <button onClick={agregarUsuario} className="btn btn-success">
              Inscribirme
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Registro;
