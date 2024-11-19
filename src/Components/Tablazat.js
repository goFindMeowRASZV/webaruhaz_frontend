import React, { createContext, useContext } from "react";
import TablazatSor from "./TablazatSor";
import { ApiContext } from "../contexts/ApiContext";

function Tablazat() {
  const { termekLista } = useContext(ApiContext);
  return (
    <table className = "table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Termék</th>
          <th scope="col">Ár</th>
          <th scope="col">Kategória</th>
          <th scope="col">Szín</th>
          <th scope="col">Kép</th>
        </tr>
      </thead>
      <tbody>
        {termekLista.map((elem, index) => {
          return <TablazatSor elem={elem} key={index} />;
        })}
        ;
      </tbody>
    </table>
  );
}

export default Tablazat;
