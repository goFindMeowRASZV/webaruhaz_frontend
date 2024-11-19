import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

function TablazatSor(props) {
  const url='http://localhost:8000/';
  return (
          <tr>
            <td scope="row" value={props} >{props.elem.id}</td>
            <td  value={props} >{props.elem.nev}</td>
            <td  value={props}>{props.elem.ar}</td>
            <td  value={props} >{props.elem.kategoria}</td>
            <td  value={props} >{props.elem.szin}</td>
            <td><img src={url+props.elem.kep} alt="{props.kep}" height="100"></img></td>
            <td><button type="button" class="btn btn-dark">Törlés</button></td>
          </tr>
  );
}

export default TablazatSor;