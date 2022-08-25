import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const Contexto = ({ children }) => {
  const [valor, setValor] = useState(0);
  const [poesias, setPoesias] = useState([]);
  useEffect(() => {
    axios
      .get("https://concurso-poesia.herokuapp.com/prueba/verGeneros")
      .then((res) => {
        setPoesias(res.data.Generos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [valor]);

  return (
    <DataContext.Provider value={{ valor, setValor, poesias }}>
      {children}
    </DataContext.Provider>
  );
};

export default Contexto;
