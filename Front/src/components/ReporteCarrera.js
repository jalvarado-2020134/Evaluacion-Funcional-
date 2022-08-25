import React from "react";
import Navbar from "./Navbar";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ReporteCarrera = () => {
  const [usuarios, setUsuarios] = useState([]);
  const valores = useParams();

  useEffect(() => {
    axios
      .get("https://concurso-poesia.herokuapp.com/prueba/carreras/" + valores.carrera)
      .then((res) => {
        setUsuarios(res.data.UsuariosCarrera);
        if (res.data.UsuariosCarrera.length === 0) {
          Swal.fire({
            icon: "info",
            title: "Ningún usuario se ha registrado con esta carrera",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [valores.carrera]);

  return (
    <>
      <Navbar />
      <br />
      <Link className="nav-link" to="/inicio">
      <button className="m-3 text-left btn btn-danger">
        Regresar
      </button>
      </Link>
      <br></br>
      <MDBTable className="tabla">
        <MDBTableHead>
          <tr className="table-danger">
            <th scope="col">Carnet</th>
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            <th scope="col">Edad</th>
            <th scope="col">Fecha de inscripción</th>
          </tr>
        </MDBTableHead>
        {/* Retorno implicito */}
        {usuarios.map((users) => (
          <MDBTableBody key={users._id}>
            <tr className="table-primary">
              <td>{users.carnet}</td>
              <th scope="row">{users.nombre}</th>
              <td>{users.carrera}</td>
              <td>{users.edad} años</td>
              <td>{users.inscripcion}</td>
            </tr>
          </MDBTableBody>
        ))}
      </MDBTable>
    </>
  );
};

export default ReporteCarrera;
