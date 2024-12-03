import React, { useContext, useState } from "react"
import { ApiContext } from "../../contexts/ApiContext"
import TablazatSor from "./TablazatSor"
import Urlap from "./Urlap";

function Tablazat(){
  const { termekLista } = useContext(ApiContext);
    return(
        <div>
          <div>
            <Urlap/>
          </div>
          <table className="table">
            <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Név</th>
                  <th scope="col">Ár</th>
                  <th scope="col">Kategória</th>
                  <th scope="col">szín</th>
                  <th scope="col">Kép</th>
                </tr>
            </thead>
            <tbody>
              {termekLista.map((elem, key) => {
                return (
                    <TablazatSor elem={elem} key={key}/>
                    );
                  })};
            </tbody>
          </table>
        </div>
    )
}
export default Tablazat
