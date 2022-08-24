import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Reporte = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/prueba/edades")
      .then((res) => {
        setUsuarios(res.data.UsuariosEdad);
        if (res.data.UsuariosEdad.length === 0) {
          Swal.fire({
            icon: "info",
            title: "No hay usuarios con la información que buscas.",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <br />
      <Link className="nav-link" to="/">
      <button className="m-3 text-left btn btn-danger">
        Regresar
      </button>
      </Link>
      <br></br>
      <MDBTable className="tabla">
        <MDBTableHead>
          <tr className="table-info">
            <th scope="col">Carnet</th>
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            <th scope="col">Edad</th>
            <th scope="col">Fecha de inscripción</th>
          </tr>
        </MDBTableHead>
        {usuarios.map((users) => {
          return (
            <MDBTableBody key={users._id}>
              <tr className="table-primary">
                <td>{users.carnet}</td>
                <th scope="row">{users.nombre}</th>
                <td>{users.carrera}</td>
                <td>{users.edad} años</td>
                <td>{users.inscripcion}</td>
              </tr>
            </MDBTableBody>
          );
        })}
      </MDBTable>
    </>
  );
};

export default Reporte;
