import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

function TablazatSor(props) {
  const url = "http://localhost:8000/"
  return(
    <tr>
              <td scope="row">{props.elem.id}</td>
              <td >{props.elem.nev}</td>
              <td >{props.elem.ar}</td>
              <td >{props.elem.kategoria}</td>
              <td >{props.elem.szin}</td>
              <td ><img src={url+props.elem.kep} alt={props.elem.kep} height="100"></img></td>
              <td ><button type="button" className="btn btn-dark">Törlés</button></td>
    </tr>
  )
}

export default TablazatSor;
