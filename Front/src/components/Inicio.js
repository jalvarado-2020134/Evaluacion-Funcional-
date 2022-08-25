import Navbar from "./Navbar";

import { Link } from "react-router-dom";

import React, { useState, useContext } from "react";

import { DataContext } from "../context/Contexto";

const Inicio = () => {
  const { poesias } = useContext(DataContext);
  const [carrera, setCarrera] = useState("");
  const [poesia, setPoesia] = useState();

  

  return (
    <>
      <Navbar />



      <header>
        <div
          className="p-5 text-center bg-secondary"
          style={{
            height: 550
          }}
        >
                <h1 className="text-white mb-4 mt-1 p-1">Universidad de Guatemala</h1><br></br>

          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-4">Concurso de poesia</h1><br></br>
                <h2 className="mb-4 text-secondary">La Universidad de Guatemala tendrá un evento de poesia y se ha invitado a todos los jóvenes estudiantes a participar.</h2><br></br>
                <h4 className="mb-4">Ver usuarios registrados</h4>
                <div className="btn-group">
                  
                  <button
                    type="button"
                    className="btn btn-info dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ver Tablas
                  </button>
                  
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={"/reportes"}>
                        <button className="dropdown-item">Ordenador por Edad</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/reporteFechas"}>
                        <button className="dropdown-item">Ordenados por Fecha</button>
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="dropdown-item"
                      >
                        Ordenados por Genero de Poesia
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        className="dropdown-item"
                      >
                        Ordenados por Carrera
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Selecciona un genero de poesía
              </h5>
            </div>
            <div className="modal-body">
              <select
                name="generoPoesia"
                type="text"
                className="form-control"
                required
                value={poesia}
                onChange={(n) => {
                  setPoesia(n.target.value);
                }}
              >
                <option selected disabled hidden value={""}>
                  Selecciona el genero de poesia
                </option>
                {poesias.map((p) => (
                  <option key={p._id} value={p._id}>
                    {p.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>

              <Link to={`/reportePoesia/${poesia}`}>
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  className="btn btn-primary"
                >
                  Ir
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Selecciona una carrera
              </h5>
            </div>
            <div className="modal-body">
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
                  Selecciona una carrera
                </option>
                <option value={"Ingenieria"}>Ingenieria</option>
                <option value={"Administración"}>Administración</option>
                <option value={"Derecho"}>Derecho</option>
                <option value={"Medicina"}>Medicina</option>
              </select>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>

              <Link to={`/reporteCarreras/${carrera}`}>
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  className="btn btn-primary"
                >
                  Ir
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
