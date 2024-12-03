import React, { useContext } from "react";
import { KosarContext } from "../../contexts/KosarContext";

function Kosar() {
  const { dbModosit, total, kosar } = useContext(KosarContext);
  return (
    <>
      <ul className="list-group">
        {kosar.map((termek) => {
          return (
            <li className="row border p-2" key={termek.id}>
              <span className="col-sm-6">{termek.nev}</span>
              <span className="col-sm-3">{termek.ar}</span>
              <span className="col-sm-3">
                <input
                  className="form-control form-control-sm"
                  type="number"
                  min="0"
                  max="10"
                  value={termek.db}
                  onChange={(e) => dbModosit(termek.id, Number(e.target.value))}
                  aria-label="0 és 10 között"
                ></input>
              </span>
            </li>
          );
        })} 
      </ul>
     {total===0?"": <p>Fizetendő: {total}</p>}
    </>
  );
}

export default Kosar;