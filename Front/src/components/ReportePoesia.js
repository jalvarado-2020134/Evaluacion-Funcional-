import React from "react";
import Navbar from "./Navbar";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ReportePoesia = () => {
  const [usuarios, setUsuarios] = useState([]);
  const valores = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/prueba/poesia/" + valores.poesia)
      .then((res) => {
        setUsuarios(res.data.UsuariosPoesia);
        console.log(valores.poesia)
        if(res.data.UsuariosPoesia.length === 0){
          Swal.fire({
            icon: 'info',
            title: 'Ningún usuario se ha registrado con este genero de poesia',
          })
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [valores.poesia]);

  return (
    <>
    <Navbar/>
      <br />
      <Link className="nav-link" to="/">
      <button className="m-3 text-left btn btn-danger">
        Regresar
      </button>
      </Link>
      <br></br>
      <MDBTable className="tabla">
        <MDBTableHead>
          <tr className="table-warning">
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

export default ReportePoesia;
